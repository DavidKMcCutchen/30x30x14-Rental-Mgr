import { Rental } from "@rental-mgr/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as RentalActions from './rentals.actions';

export const RENTAL_FEATURE_KEY = 'rentals';

export interface RentalState extends EntityState<Rental> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface RentalPartialState {
    readonly [RENTAL_FEATURE_KEY]: RentalState
};

export const rentalAdapter: EntityAdapter<Rental> = createEntityAdapter<Rental>();

export const initialRentalState: RentalState = rentalAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): RentalState => ({ ...state, error});

const onDispatch = (state, action): RentalState => ({
    ...state,
    loaded: false,
    error: null
});

const _rentalReducer = createReducer(
    initialRentalState,
    on(
        RentalActions.loadRentalFailed,
        RentalActions.loadRentalsFailed,
        RentalActions.createRentalFailed,
        RentalActions.updateRentalFailed,
        RentalActions.deleteRentalFailed,
        onFailed
    ),
    on(
        RentalActions.loadRental,
        RentalActions.loadRentals,
        RentalActions.createRental,
        RentalActions.updateRental,
        RentalActions.deleteRental,
        onDispatch
    ),
    on(
        RentalActions.loadRentalSuccess, (state, { rental }) =>
        rentalAdapter.upsertOne(rental, {...state, loaded: true})
    ),
    on(
        RentalActions.selectRental, (state, { rentalId }) => ({
            ...state,
            selectedId: rentalId
        })
    ),
    on(
        RentalActions.loadRentalsSuccess, (state, { rentals }) =>
        rentalAdapter.setAll(rentals, {...state, loaded: true})
    ),
    on(
        RentalActions.deleteRentalSuccess, (state, { rental }) =>
        rentalAdapter.removeOne(rental.id, {...state, loaded: true})
    ),
    on(
        RentalActions.updateRentalSuccess, (state, { rental }) =>
        rentalAdapter.updateOne(
            {id: rental.id, changes: rental},
            {...state, loaded: true}
        )
    ),
    on(
        RentalActions.createRentalSuccess, (state, {rental }) =>
        rentalAdapter.addOne(rental, {...state, loaded: true})
    ),
)

export function rentalReducer(
    state: RentalState | undefined,
    action: Action
) {
    return _rentalReducer(state, action)
}
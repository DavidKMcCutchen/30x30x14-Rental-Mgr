import { Injectable } from "@angular/core";
import { Rental } from "@rental-mgr/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as RentalActions from './rentals.actions';
import * as RentalSelectors from './rentals.selectors';
import * as fromRentals from './rentals.reducer';


@Injectable({
    providedIn: 'root'
})

export class RentalFacade {
    allRentals$ = this.store.pipe(
        map((state) => RentalSelectors.getAllRentals(state)),
    )
    selectedRentals$ = this.store.pipe(select(RentalSelectors.getSelectedRental));
    loaded$ = this.store.pipe(select(RentalSelectors.getRentalsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === RentalActions.createRental({} as any) .type ||
        action.type === RentalActions.updateRental({} as any) .type ||
        action.type === RentalActions.deleteRental({} as any) .type 
        ))

        selectRental(rentalId: string) {
            this.dispatch(RentalActions.selectRental({ rentalId }));
        };

        loadRentals() {
            this.dispatch(RentalActions.loadRentals())
        };

        loadRental(rentalId: string) {
            this.dispatch(RentalActions.loadRental({ rentalId }))
        };

        saveRental(rental: Rental) {
            rental.id ? this.updateRental(rental) : this.createRental(rental)
        };

        createRental(rental: Rental) {
            this.dispatch(RentalActions.createRental({ rental }))
        };

        updateRental(rental: Rental) {
            this.dispatch(RentalActions.updateRental({ rental }))
        };

        deleteRental(rental: Rental) {
            this.dispatch(RentalActions.deleteRental({ rental }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromRentals.RentalPartialState>,
            private actions$: ActionsSubject
        ) {}
}
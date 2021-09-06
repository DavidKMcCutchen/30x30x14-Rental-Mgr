import { ActionReducerMap } from "@ngrx/store";
import * as fromRentals from './rentals/rentals.reducer';

export interface AppState {
    [fromRentals.RENTAL_FEATURE_KEY]: fromRentals.RentalState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromRentals.RENTAL_FEATURE_KEY]: fromRentals.rentalReducer
};
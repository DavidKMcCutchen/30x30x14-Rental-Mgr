import { createAction, props } from "@ngrx/store";
import {  Rental } from "@rental-mgr/api-interfaces";

// Select Entity

export const selectRental = createAction(
    '[RENTAL] Select Rental',
    props<{ rentalId: string }>()
);

// Load all Entities

export const loadRentals = createAction(
    '[RENTAL] Load Rentals'
);

export const loadRentalsSuccess = createAction(
    '[RENTAL] Load Rentals Success',
    props<{ rentals: Rental[]}>()
);

export const loadRentalsFailed = createAction(
    '[RENTAL] Load Rentals Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadRental = createAction(
    '[RENTAL] Load Rental',
    props<{ rentalId: string}>()
);

export const loadRentalSuccess = createAction(
    '[RENTAL] Load Rental Success',
    props<{ rental: Rental}>()
);

export const loadRentalFailed = createAction(
    '[RENTAL] Load Rental Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createRental = createAction(
    '[RENTAL] Create Rental',
    props<{ rental: Rental}>()
);

export const createRentalSuccess = createAction(
    '[RENTAL] Create Rental Success',
    props<{ rental: Rental}>()
);

export const createRentalFailed = createAction(
    '[RENTAL] Create Rental Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateRental = createAction(
    '[RENTAL] Update Rental',
    props<{ rental: Rental}>()
);

export const updateRentalSuccess = createAction(
    '[RENTAL] Update Rental Success',
    props<{ rental: Rental}>()
);

export const updateRentalFailed = createAction(
    '[RENTAL] Create Rental Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteRental = createAction(
    '[RENTAL] Delete Rental',
    props<{ rental: Rental}>()
);

export const deleteRentalSuccess = createAction(
    '[RENTAL] Delete Rental Success',
    props<{ rental: Rental}>()
);

export const deleteRentalFailed = createAction(
    '[RENTAL] Create Rental Failed',
    props<{ error: any}>()
);
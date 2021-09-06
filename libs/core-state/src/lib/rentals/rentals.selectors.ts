import { emptyRental } from "@rental-mgr/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { rentalAdapter, RentalState, RENTAL_FEATURE_KEY } from "./rentals.reducer";

export const getRentalState = createFeatureSelector<RentalState>(RENTAL_FEATURE_KEY);

const { selectAll, selectEntities } = rentalAdapter.getSelectors();

export const getRentalsLoaded = createSelector(
    getRentalState,
    (state: RentalState) => state.loaded
);

export const getRentalError = createSelector(
    getRentalState,
    (state: RentalState) => state.error
);

export const getAllRentals = createSelector(
    getRentalState,
    (state: RentalState) => selectAll(state)
);

export const getRentalEntities = createSelector(
    getRentalState,
    (state: RentalState) => selectEntities(state)
);

export const getSelectedRentalId = createSelector(
    getRentalState,
    (state: RentalState) => state.selectedId
);

export const getSelectedRental = createSelector(
    getRentalEntities,
    getSelectedRentalId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyRental
);
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Rental } from "@rental-mgr/api-interfaces";
import { RentalsService } from "@rental-mgr/core-data";
import * as RentalActions from './rentals.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class RentalEffects{
    loadRental$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RentalActions.loadRental),
            fetch({
                run: (action) =>
                    this.rentalsService
                        .find(action.rentalId)
                        .pipe(map((rental: Rental) => RentalActions.loadRentalSuccess({ rental }))),
                    onError: (action, error) => RentalActions.loadRentalFailed({ error })    
            })
        ));
    loadRentals$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RentalActions.loadRentals),
            fetch({
                run: () =>
                    this.rentalsService
                    .all()
                    .pipe(
                        map((rentals: Rental[]) => RentalActions.loadRentalsSuccess({ rentals }))
                    ),
                onError: (action, error) => RentalActions.loadRentalsFailed({ error })    
            })
        ));
        createRental$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RentalActions.createRental),
            pessimisticUpdate({
                run: (action) =>
                    this.rentalsService
                        .create(action.rental)
                        .pipe(map((rental: Rental) => RentalActions.createRentalSuccess({ rental }))),
                    onError: (action, error) => RentalActions.createRentalFailed({ error })    
            })
    ));

    updateRental$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RentalActions.updateRental),
            pessimisticUpdate({
                run: (action) =>
                    this.rentalsService
                        .update(action.rental)
                        .pipe(map((rental: Rental) => RentalActions.updateRentalSuccess({ rental}))),
                    onError: (action, error) => RentalActions.updateRentalFailed({ error })    
            })
    ));

    deleteRental$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RentalActions.deleteRental),
            pessimisticUpdate({
                run: (action) =>
                    this.rentalsService
                        .delete(action.rental)
                        .pipe(
                            map(() => RentalActions.deleteRentalSuccess({ rental: action.rental }))
                        ),
                    onError: (action, error) => RentalActions.deleteRentalFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private rentalsService: RentalsService
    ) {}    
}
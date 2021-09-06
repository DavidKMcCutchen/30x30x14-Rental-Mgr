import { Injectable } from '@angular/core';
import { NotificationsService } from '@rental-mgr/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as RentalsActions from './rentals.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RentalsActions.createRentalSuccess),
        tap(() => this.notificationService.notify('Create Rental Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RentalsActions.updateRentalSuccess),
        tap(() => this.notificationService.notify('Update Rental Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RentalsActions.deleteRentalSuccess),
        tap(() => this.notificationService.notify('Delete Rental Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}

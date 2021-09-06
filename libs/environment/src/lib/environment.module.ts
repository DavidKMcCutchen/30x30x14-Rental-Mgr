import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RENTAL_ENVIRONMENT } from './rentals.token';
import { RentalEnvironment } from "./rentals.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: RentalEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: RENTAL_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
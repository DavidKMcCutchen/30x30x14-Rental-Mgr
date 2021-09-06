import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RentalsComponent } from './rentals/rentals.component';
import { RentalDetailsComponent } from './rentals/rental-details/rental-details.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { MaterialModule } from "@rental-mgr/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@rental-mgr/core-data";
import { CoreStateModule } from "@rental-mgr/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@rental-mgr/environment';
import { UiLoginModule } from '@rental-mgr/ui-login';
import { RentalComponent } from './rental/rental.component';
import { RentalInfoComponent } from './rental/rental-info/rental-info.component';

@NgModule({
  declarations: [AppComponent, RentalsComponent, RentalDetailsComponent, RentalListComponent, RentalInfoComponent, RentalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
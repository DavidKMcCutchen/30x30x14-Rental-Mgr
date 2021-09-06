import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { RentalsComponent } from './rentals/rentals.component';
import { LoginComponent, WildComponent } from "@rental-mgr/ui-login";
import { RentalComponent } from './rental/rental.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'rentals', component: RentalsComponent},
  {path: 'rentals/:id', component: RentalComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
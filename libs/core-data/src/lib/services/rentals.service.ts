import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Rental } from "@rental-mgr/api-interfaces";
import { RentalEnvironment, RENTAL_ENVIRONMENT } from "@rental-mgr/environment";


@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  model = 'rentals';

  constructor(
    private httpClient: HttpClient,
    @Inject(RENTAL_ENVIRONMENT) private environment: RentalEnvironment
  ) {}

  all() {
    return this.httpClient.get<Rental[]>(this.getUrl())
  };

  find(rentalId: string) {
    return this.httpClient.get<Rental>(this.getUrlById(rentalId))
  };

  create(rentals: Rental) {
    return this.httpClient.post<Rental>(this.getUrl(), rentals)
  };

  update(rentals: Rental) {
    return this.httpClient.patch<Rental>(this.getUrlById(rentals.id), rentals)
  };

  delete({ id }: Rental) {
    return this.httpClient.delete<Rental>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
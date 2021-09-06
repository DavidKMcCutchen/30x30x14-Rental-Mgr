import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Rental, emptyRental } from '@rental-mgr/api-interfaces';
import { RentalFacade } from '@rental-mgr/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'rental-mgr-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {
  allRentals$: Observable<Rental[]> = this.rentalFacade.allRentals$;
  selectedRental$: Observable<Rental> = this.rentalFacade.selectedRentals$;

  form: FormGroup;

  constructor(
    private rentalFacade: RentalFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.rentalFacade.mutations$.subscribe((_) => this.resetRental());
  }

  ngOnInit() {
    this.initForm();
    this.rentalFacade.loadRentals();
    this.resetRental()

    const rentalRouteId = this.route.snapshot.params['id'];

    if (rentalRouteId) {
      this.loadRental((rentalRouteId))
    }
  }

  viewRental(rentalId: string) {
    this.router.navigate(["rentals", rentalId])
  }

  loadRental(rentalId: string) {
    this.rentalFacade.selectRental(rentalId);
    this.rentalFacade.loadRental(rentalId);
  }

  selectRental(rental: Rental) {
    this.rentalFacade.selectRental(rental.id)
    this.form.patchValue(rental);
  }

  saveRental(rental: Rental) {
    this.rentalFacade.saveRental(rental);
  }

  deleteRental(rental: Rental) {
    this.rentalFacade.deleteRental(rental);
  }

  resetRental() {
    this.form.reset();
    this.selectRental(emptyRental)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      address: [''],
      rentalIncome: [''],
      financed: [''],
    })
  }
}

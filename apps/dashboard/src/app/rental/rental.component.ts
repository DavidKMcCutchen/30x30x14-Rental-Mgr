import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalFacade } from '@rental-mgr/core-state';


@Component({
  selector: 'rental-mgr-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  currentRental$ = this.rentalFacade.selectedRentals$
  

  constructor(
    private rentalFacade: RentalFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const rentalId = this.route.snapshot.params.id;
    this.loadRental(rentalId);
  }

  loadRental(rentalId: string) {
    this.rentalFacade.selectRental(rentalId);
    this.rentalFacade.loadRental(rentalId);
  }

  navigateBack() {
    this.router.navigate(['/rentals']);
  };

}


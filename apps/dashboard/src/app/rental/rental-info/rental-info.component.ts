import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RentalFacade } from '@rental-mgr/core-state';
import { Rental } from "@rental-mgr/api-interfaces";


@Component({
  selector: 'rental-mgr-rental-info',
  templateUrl: './rental-info.component.html',
  styleUrls: ['./rental-info.component.scss']
})
export class RentalInfoComponent {

  @Input() rental: Rental | null;


  constructor(
    private rentalFacade: RentalFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/rentals']);
  };

}


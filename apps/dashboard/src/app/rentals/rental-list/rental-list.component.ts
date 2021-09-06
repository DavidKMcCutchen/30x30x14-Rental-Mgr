import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rental } from '@rental-mgr/api-interfaces';


@Component({
  selector: 'rental-mgr-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent {
  @Input() rentals: Rental[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() rentalViewed = new EventEmitter();
}

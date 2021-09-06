import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Rental } from "@rental-mgr/api-interfaces";

@Component({
  selector: 'rental-mgr-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent {
  currentRental: Rental;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set rental(value) {
    if (value) this.originalTitle = value.name;
    this.currentRental = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}


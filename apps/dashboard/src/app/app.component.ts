import { Component } from '@angular/core';

@Component({
  selector: 'rental-mgr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Rentals';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'rentals', icon: 'view_list', title: 'Rentals'}
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  Property: any = {
    "Id" : 1,
    "Name" : "Defence House",
    "Type" : "House",
    "Price" : 120000
  }

}

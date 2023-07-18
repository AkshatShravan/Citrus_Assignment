import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() image!:string;
  @Input() status!:string;

  getStatusClass(status: string): string {
    if (status === 'Paid') {
      return 'paid';
    } else if (status === 'Out Standing') {
      return 'outStanding';
    }else if (status === 'Cancelled') {
      return 'cancelled';
    }else if (status === 'Delivered') {
      return 'delivered';
    } else {
      return '';
    }
  }

}

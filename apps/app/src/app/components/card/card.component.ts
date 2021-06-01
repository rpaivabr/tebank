import { Component, Input } from '@angular/core';

@Component({
  selector: 'tebank-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() description = 'default';
  @Input() disabled = false;

}

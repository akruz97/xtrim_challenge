import { Component, Input } from '@angular/core';
import { GaugeBalance } from '../gauge-balance/gauge-balance';

@Component({
  selector: 'app-card-item',
  imports: [GaugeBalance],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() balance: number = 0;
  @Input() label: string = '';
  @Input() plan_limit: number = 0;
  @Input() additional: number = 0;
}

import { Component, Input } from '@angular/core';
import { GaugeBalance } from '../gauge-balance/gauge-balance';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-item',
  imports: [GaugeBalance, CommonModule],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})

/**
 * CardItem
 * Muestra un ítem de consumo en el dashboard.
 */
export class CardItem {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() balance: number = 0;
  @Input() label: string = '';
  @Input() plan_limit: number = 0;
  @Input() additional: number = 0;
  @Input() error: string | null = '';
}

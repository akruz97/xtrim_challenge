import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  @Input() title: string = '';
  @Input() value: number | undefined = 0;
  @Input() balance: number | undefined = 0;
  @Input() label: string = '';
  @Input() plan_limit: number | undefined = 0;
  @Input() additional: number | undefined = 0;
}

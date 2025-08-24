import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerDashboard } from './core/components/customer-dashboard/customer-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('telco_x');
}

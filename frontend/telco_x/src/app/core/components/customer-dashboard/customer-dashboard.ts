import { Component } from '@angular/core';
import { Menu } from './../menu/menu';
import { Profile } from './../../../features/users/components/profile/profile';
import { CardItem } from '../card-item/card-item';
import { IConsumption, IPlan, UserProfile } from '../../../shared/interfaces';
import { ProfileService } from '../../services/profile/profile.service';
import { ConsumptionService } from '../../services/consumption/consumption.service';
import { CommonModule } from '@angular/common';
import { PlanService } from '../../services/plan/plan.service';

@Component({
  selector: 'customer-dashboard',
  imports: [CommonModule, Menu, Profile, CardItem],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css',
  standalone: true,
})
export class CustomerDashboard {
  consumption: IConsumption | undefined;
  plan: IPlan | undefined;

  constructor(private consumptionService: ConsumptionService, private planService: PlanService) {}

  ngOnInit(): void {
    // llamamos al servicio
    this.getPlan();
    this.getConsumption();
  }

  getConsumption(): void {
    this.consumptionService.getConsumption(2).subscribe({
      next: (data) => {
        this.consumption = data;
        console.log('Consumo recibido:', data);
      },
      error: (err) => {
        console.error('Error al cargar consumo:', err);
      },
    });
  }

  getPlan(): void {
    this.planService.getPlan(2).subscribe({
      next: (data) => {
        this.plan = data;
        console.log('Plan recibido:', data);
      },
      error: (err) => {
        console.error('Error al cargar plan:', err);
      },
    });
  }
}

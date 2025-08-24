import { Component } from '@angular/core';
// import { Menu } from './../menu/menu';
import { Profile } from './../../../features/users/components/profile/profile';
import { CardItem } from '../card-item/card-item';
import { Navbar } from './../navbar/navbar';
import { IConsumption, IPlan, UserProfile } from '../../../shared/interfaces';
import { ProfileService } from '../../services/profile/profile.service';
import { ConsumptionService } from '../../services/consumption/consumption.service';
import { CommonModule } from '@angular/common';
import { PlanService } from '../../services/plan/plan.service';
import { Router } from '@angular/router';
import { UserShared } from '../../../shared/services/user.shared';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'customer-dashboard',
  imports: [CommonModule, Profile, CardItem, Navbar],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css',
  standalone: true,
})
export class CustomerDashboard {
  consumption: IConsumption | undefined;
  plan: IPlan | undefined;
  // userId;

  constructor(
    private consumptionService: ConsumptionService,
    private planService: PlanService,
    private userShared: UserShared,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // llamamos al servicio
    this.getPlan();
    this.getConsumption();
  }

  getConsumption(): void {
    const userId = this.auth.getUserId();

    console.log('ID recibido en dashboard:', userId);
    if (!userId) {
      return;
    }
    this.consumptionService.getConsumption(userId).subscribe({
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

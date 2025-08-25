import { Component } from '@angular/core';
import { Profile } from '../../../users/components/profile/profile';
import { CardItem } from '../../components/card-item/card-item';
import { Navbar } from '../../../../core/components/navbar/navbar';
import { IConsumption, IPlan, UserProfile } from '../../../../shared/interfaces';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { ConsumptionService } from '../../../../core/services/consumption/consumption.service';
import { CommonModule } from '@angular/common';
import { PlanService } from '../../../../core/services/plan/plan.service';
import { Router } from '@angular/router';
import { UserShared } from '../../../../shared/services/user.shared';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'customer-dashboard',
  imports: [CommonModule, Profile, CardItem, Navbar],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css',
  standalone: true,
})
export class CustomerDashboard {
  consumption: IConsumption | null = null;
  plan: IPlan | undefined;
  errorConsumption = '';
  errorPlan = '';
  // userId;

  constructor(
    private consumptionService: ConsumptionService,
    private planService: PlanService,
    private userShared: UserShared,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
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
        this.errorConsumption = 'Error al cargar consumo';
        console.error('Error al cargar consumo:', err);
      },
    });
  }

  getPlan(): void {
    const userId = this.auth.getUserId();

    console.log('ID recibido en dashboard:', userId);
    if (!userId) {
      return;
    }
    this.planService.getPlan(userId).subscribe({
      next: (data) => {
        this.plan = data;
        console.log('Plan recibido:', data);
      },
      error: (err) => {
        this.errorPlan = 'Error al cargar plan';
        console.error('Error al cargar plan:', err);
      },
    });
  }
}

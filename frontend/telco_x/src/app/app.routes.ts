import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { CustomerDashboard } from './core/components/customer-dashboard/customer-dashboard';
import { AuthGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: CustomerDashboard,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

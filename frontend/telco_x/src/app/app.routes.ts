import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { CustomerDashboard } from './features/dashboard/pages/customer-dashboard/customer-dashboard';
import { AuthGuard } from './shared/guards/auth-guard';
import { Profile } from './features/users/components/profile/profile';
import { MyPlan } from './features/plan/pages/my-plan/my-plan';
import { MyProfile } from './features/users/pages/my-profile/my-profile';

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
    path: 'profile',
    component: MyProfile,
    canActivate: [AuthGuard],
  },
  {
    path: 'plan',
    component: MyPlan,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { dashboardComponent } from '../dashboard/dashboard.component';

export const routes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: dashboardComponent
  },
  { path: '', 
    component: LoginComponent 
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
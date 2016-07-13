import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from './login.component';
import { Page2Component } from './page2.component';

export const routes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'page2',
    component: Page2Component
  },
  { path: '', 
    component: LoginComponent 
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
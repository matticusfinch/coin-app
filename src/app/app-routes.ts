import { Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';
import { AccountComponent } from './coin-manager/account/account.component';

export const appRoutes: Routes = [
  { path: '', component:  HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent }
];

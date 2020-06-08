import {  Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: '', component:  HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];


import {  Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];


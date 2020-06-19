import { Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';
import { AccountComponent } from './coin-manager/account/account.component';
import { CoinListComponent } from './coin-manager/coins/coin-list/coin-list.component';
import { AppComponent } from './app.component';
import { ReportingComponent } from './coin-manager/reporting/reporting.component';
import { MenuComponent } from './coin-manager/menu/menu.component';

export const appRoutes: Routes = [
  { path: '',
    component:  AppComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'account', component: AccountComponent }]},
  { path: 'dashboard',
    component: MenuComponent,
    children: [
      { path: 'reporting', component: ReportingComponent },
      { path: 'coins/:denom', component: CoinListComponent }
    ] },
];

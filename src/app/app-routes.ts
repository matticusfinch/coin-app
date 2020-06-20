import { Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { AccountComponent } from './coin-manager/account/account.component';
import { CoinListComponent } from './coin-manager/coins/coin-list/coin-list.component';
import { AppComponent } from './app.component';
import { ReportingComponent } from './coin-manager/reporting/reporting.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent }
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ReportingComponent },
      { path: 'coins/:denom', component: CoinListComponent },
      { path: 'account', component: AccountComponent }
    ],
  },
];

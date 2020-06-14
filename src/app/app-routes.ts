import { Routes } from '@angular/router';
import { LoginComponent } from './coin-manager/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';
import { AccountComponent } from './coin-manager/account/account.component';
import { OneCentComponent } from './coin-manager/coins/one-cent/one-cent.component';
import { FiveCentComponent } from './coin-manager/coins/five-cent/five-cent.component';
import { TenCentComponent } from './coin-manager/coins/ten-cent/ten-cent.component';
import { TwentyCentComponent } from './coin-manager/coins/twenty-cent/twenty-cent.component';
import { TwentyFiveCentComponent } from './coin-manager/coins/twenty-five-cent/twenty-five-cent.component';
import { FiftyCentComponent } from './coin-manager/coins/fifty-cent/fifty-cent.component';
import { TwoDollarComponent } from './coin-manager/coins/two-dollar/two-dollar.component';

export const appRoutes: Routes = [
  { path: '', component:  HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
  { path: 'one-cent', component: OneCentComponent },
  { path: 'five-cent', component: FiveCentComponent },
  { path: 'ten-cent', component: TenCentComponent },
  { path: 'twenty-cent', component: TwentyCentComponent },
  { path: 'twenty-five-cent', component: TwentyFiveCentComponent },
  { path: 'fifty-cent', component: FiftyCentComponent },
  { path: 'two-dollar', component: TwoDollarComponent }
];

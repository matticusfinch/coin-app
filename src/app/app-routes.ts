import { Routes } from '@angular/router';
import { LoginComponent } from './main-landing/login/login.component';
import { HomePageComponent } from './main-landing/home-page/home-page.component';
import { AccountComponent } from './coin-manager/account/account.component';
import { CoinListComponent } from './coin-manager/coins/coin-list/coin-list.component';
import { AppComponent } from './app.component';
import { ReportingComponent } from './coin-manager/reporting/reporting.component';
import { DashboardComponent } from './coin-manager/dashboard/dashboard.component';
import { PrivacyComponent } from './main-landing/privacy/privacy.component';
import { CoinDetailsComponent } from './coin-manager/coins/coin-details/coin-details.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'privacy-policy', component: PrivacyComponent }
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '',
        component: ReportingComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
      { path: 'account',
        component: AccountComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin} },
      { path: 'coins/:denom',
        component: CoinListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
      { path: 'coins/:denom/:year',
        component: CoinDetailsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}}
    ],
  },
];

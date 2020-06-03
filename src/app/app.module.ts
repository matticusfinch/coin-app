import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLandingModule } from './main-landing/main-landing.module';
import { CoinManagerModule } from './coin-manager/coin-manager.module';
import { LoginComponent } from './coin-manager/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MainLandingModule,
    CoinManagerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

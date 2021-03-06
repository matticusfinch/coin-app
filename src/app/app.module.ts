import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLandingModule } from './main-landing/main-landing.module';
import { CoinManagerModule } from './coin-manager/coin-manager.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CoinService } from './services/coin.service';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './services/theme.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HistoryInfoService } from './services/history-info.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainLandingModule,
    CoinManagerModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, CoinService, ThemeService, HistoryInfoService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

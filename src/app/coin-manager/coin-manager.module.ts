import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './account/delete/delete.component';
import { CoinCardTemplateComponent } from './coins/coin-card-template/coin-card-template.component';
import { CoinListComponent } from './coins/coin-list/coin-list.component';
import { CoinService } from '../services/coin.service';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    DashboardComponent,
    ReportingComponent,
    AccountComponent,
    DeleteComponent,
    CoinCardTemplateComponent,
    CoinListComponent,
    WhatsHotComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    CoinService
  ]
})
export class CoinManagerModule { }

const initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      alert(JSON.stringify('Hello ' + displayName, null, 4));
    } else {
    }
  })
};

window.addEventListener('load', function() {
  initApp();
});

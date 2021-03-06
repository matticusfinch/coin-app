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
import { CoinDetailsComponent } from './coins/coin-details/coin-details.component';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './coins/upload/upload.component';
import { EditCoinComponent } from './coins/edit-coin/edit-coin.component';
import { SellCoinComponent } from './coins/sell-coin/sell-coin.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ReportingComponent,
    AccountComponent,
    DeleteComponent,
    CoinCardTemplateComponent,
    CoinListComponent,
    WhatsHotComponent,
    CoinDetailsComponent,
    UploadComponent,
    EditCoinComponent,
    SellCoinComponent,
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
    RouterModule,
    SharedModule
  ],
  providers: [
    CoinService
  ]
})
export class CoinManagerModule { }

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './account/delete/delete.component';
import { OneCentComponent } from './coins/one-cent/one-cent.component';
import { FiveCentComponent } from './coins/five-cent/five-cent.component';
import { TenCentComponent } from './coins/ten-cent/ten-cent.component';
import { TwentyCentComponent } from './coins/twenty-cent/twenty-cent.component';
import { TwentyFiveCentComponent } from './coins/twenty-five-cent/twenty-five-cent.component';
import { FiftyCentComponent } from './coins/fifty-cent/fifty-cent.component';
import { TwoDollarComponent } from './coins/two-dollar/two-dollar.component';
import { CoinCardTemplateComponent } from './coins/coin-card-template/coin-card-template.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    ReportingComponent,
    AccountComponent,
    DeleteComponent,
    OneCentComponent,
    FiveCentComponent,
    TenCentComponent,
    TwentyCentComponent,
    TwentyFiveCentComponent,
    FiftyCentComponent,
    TwoDollarComponent,
    CoinCardTemplateComponent
  ],
  exports: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CommonModule,
    RouterModule
  ]
})
export class CoinManagerModule { }

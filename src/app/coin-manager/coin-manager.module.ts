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

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    ReportingComponent,
    AccountComponent,
    DeleteComponent
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

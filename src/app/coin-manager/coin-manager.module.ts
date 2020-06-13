import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    MenuComponent
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
    CommonModule
  ]
})
export class CoinManagerModule { }

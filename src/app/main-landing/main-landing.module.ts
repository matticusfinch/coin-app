import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    PrivacyComponent,
  ],
  exports: [
    HomePageComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ]
})
export class MainLandingModule { }

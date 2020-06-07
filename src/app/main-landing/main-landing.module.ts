import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent,
    FooterComponent
  ],
  exports: [
    HomePageComponent,
    NavComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ]
})
export class MainLandingModule { }

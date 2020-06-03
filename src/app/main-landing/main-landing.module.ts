import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent
  ],
  exports: [
    HomePageComponent,
    NavComponent
  ]
  ,
  imports: [
    MatButtonModule
  ]
})
export class MainLandingModule { }

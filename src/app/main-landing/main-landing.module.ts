import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NavComponent
  ],
  exports: [
    HomePageComponent,
    NavComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class MainLandingModule { }

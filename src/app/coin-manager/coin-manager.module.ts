import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class CoinManagerModule { }

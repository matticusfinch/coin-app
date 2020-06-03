import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class CoinManagerModule { }

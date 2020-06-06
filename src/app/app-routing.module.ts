import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router
import { appRoutes } from './app-routes';

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

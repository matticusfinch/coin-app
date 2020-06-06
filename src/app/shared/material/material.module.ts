import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const mm = [ MatButtonModule ];

@NgModule({
  declarations: [],
  imports: [...mm],
  exports: [...mm]
})
export class MaterialModule { }

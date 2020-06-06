import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


const mm = [ MatButtonModule, MatGridListModule, MatMenuModule, MatToolbarModule ];

@NgModule({
  declarations: [],
  imports: [...mm],
  exports: [...mm]
})
export class MaterialModule { }

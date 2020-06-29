import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDialogComponent } from './info-dialogs/artist/artist-dialog.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ArtistDialogComponent
  ],
  exports: [
    ArtistDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }

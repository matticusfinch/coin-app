import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { ArtistDialogComponent } from './info-dialogs/artist/artist-dialog.component';
import { MonarchDialogComponent } from './info-dialogs/monarch/monarch-dialog.component';
import { MintDialogComponent } from './info-dialogs/mint/mint-dialog.component';

@NgModule({
  declarations: [
    ArtistDialogComponent,
    MonarchDialogComponent,
    MintDialogComponent
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

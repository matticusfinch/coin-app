import { Component, OnInit, Input, Inject } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-artist-dialog',
  templateUrl: './artist-dialog.component.html'
})
export class ArtistDialogComponent implements OnInit {
  artist: Artist;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.artist = this.data.info;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coin } from 'src/app/shared/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ArtistDialogComponent } from 'src/app/shared/info-dialogs/artist/artist-dialog.component';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit {
  coin: Coin;
  denomination: string;
  year: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coinService: CoinService,
    private infoService: InfoService,
    public dialog: MatDialog
  ) { }

  openDialog(artistInfo: any) {
    const data = {
      artist: artistInfo
    };
    this.dialog.open(ArtistDialogComponent, { data });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.denomination = params.denom;
      this.year = params.year;
      this.getCoin();
    });
  }

  getCoin() {
    this.coinService
      .getCoinDetail(this.denomination, this.year)
      .subscribe((data) => {
        this.coin = data as Coin;
      });
  }

  getArtistInfo(artist: string) {
    this.infoService
      .getArtistInfo(artist)
      .subscribe((artistInfo) => {
        this.openDialog(artistInfo);
      });
  }
}

import { Component, OnInit, ComponentRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coin } from 'src/app/shared/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ArtistDialogComponent } from 'src/app/shared/info-dialogs/artist/artist-dialog.component';
import { HistoryInfoService } from 'src/app/services/history-info.service';
import { ComponentType } from '@angular/cdk/portal';
import { MonarchDialogComponent } from 'src/app/shared/info-dialogs/monarch/monarch-dialog.component';
import { MintDialogComponent } from 'src/app/shared/info-dialogs/mint/mint-dialog.component';

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
    private historyInfoService: HistoryInfoService,
    public dialog: MatDialog
  ) { }

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

  getHistory(path: string, type: string) {
    this.historyInfoService
      .getHistoryInfo(path)
      .subscribe((data) => {
        this.openInfoPopUp(data, type);
      });
  }

  openInfoPopUp(information: any, type: string ) {
    const data = {
      info: information
    };

    switch (type) {
      case 'artist': {
        this.dialog.open(ArtistDialogComponent, { data });
        break;
      }
      case 'monarch': {
        this.dialog.open(MonarchDialogComponent, { data });
        break;
      }
      default:
        this.dialog.open(MintDialogComponent, { data });
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coin } from 'src/app/shared/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';
import { MatDialog } from '@angular/material/dialog';
import { LeonardComponent } from '../info-panels/leonard/leonard.component';

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
    public dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(LeonardComponent);
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
}

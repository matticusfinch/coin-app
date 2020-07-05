import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { Coin } from 'src/app/shared/models/coin.model';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html'
})
export class CoinListComponent implements OnInit {
  cards: Coin[];
  denomination: string;

  constructor(private activatedRoute: ActivatedRoute, private coinService: CoinService) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.denomination = params.denom;
        this.getCoins();
    });
  }

  getCoins() {
    this.coinService.getCoinList(this.denomination)
    .subscribe(
      data => {
        this.cards = data as Coin[];
      }
    );
  }
}

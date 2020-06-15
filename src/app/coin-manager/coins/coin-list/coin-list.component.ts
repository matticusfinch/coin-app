import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { CoinCard } from 'src/app/shared/models/coin-card.model';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  cards: CoinCard[];
  denomination: string;

  constructor(private activatedRoute: ActivatedRoute, private coinService: CoinService) {
    this.denomination = this.activatedRoute.snapshot.params.denom;
   }

  ngOnInit(): void {
    this.getCoins();
   }

  getCoins() {
    this.coinService.getCoinList(this.denomination)
    .subscribe(
      data => {
        this.cards = data as CoinCard[];
      }
    );
  }
}

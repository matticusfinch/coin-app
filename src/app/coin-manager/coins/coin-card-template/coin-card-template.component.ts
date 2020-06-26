import { Component, OnInit, Input } from '@angular/core';
import { Coin } from 'src/app/shared/models/coin.model';

@Component({
  selector: 'app-coin-card-template',
  templateUrl: './coin-card-template.component.html',
  styleUrls: ['./coin-card-template.component.scss'],
})
export class CoinCardTemplateComponent implements OnInit {
  @Input() coin: Coin; // write coin with attribute e.g coin.year
  @Input() denom: string;

  constructor() {}

  ngOnInit(): void {}
}

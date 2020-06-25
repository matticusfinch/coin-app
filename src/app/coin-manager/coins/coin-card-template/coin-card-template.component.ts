import { Component, OnInit, Input } from '@angular/core';
import { CoinCard } from 'src/app/shared/models/coin-card.model';

@Component({
  selector: 'app-coin-card-template',
  templateUrl: './coin-card-template.component.html',
  styleUrls: ['./coin-card-template.component.scss']
})
export class CoinCardTemplateComponent implements OnInit {

  @Input() coin: CoinCard; // write coin with attribute e.g coin.year

  constructor() { }

  ngOnInit(): void {
  }

}

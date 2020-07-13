import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth  } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { CoinService } from 'src/app/services/coin.service';

export interface Coin {
  totalCoins: number;
  coinsCollected: number;
}

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html'
})
export class ReportingComponent implements OnInit {
  public user: User;
  coin: Observable<Coin>;
  collected: Observable<Coin>;
  coinToCollectTotal: number;
  constructor(public authService: AuthService, public coinService: CoinService) {
    this.user = this.authService.getUserDetails();
    this.getCoinToCollectTotal();
  }

  ngOnInit(): void {
  }

  getCoinToCollectTotal() {
    this.coinService.getCoinCountryTotal().subscribe(
      total => { this.coinToCollectTotal = total.totalCoins as number; }
    );
  }
}

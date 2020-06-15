import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient){}

  getCoinList(denomination: string) {
    return this.http.get(`/assets/coins/${denomination}.json`);
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  cards:any;
  denomination:string;

  constructor(private activatedRoute:ActivatedRoute) {
    this.denomination = this.activatedRoute.snapshot.params.denom;
   }   

  ngOnInit(): void { }
}

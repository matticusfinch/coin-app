import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Coin } from 'src/app/shared/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';
import { HistoryInfoService } from 'src/app/services/history-info.service';
import { ArtistDialogComponent } from 'src/app/shared/info-dialogs/artist/artist-dialog.component';
import { MonarchDialogComponent } from 'src/app/shared/info-dialogs/monarch/monarch-dialog.component';
import { MintDialogComponent } from 'src/app/shared/info-dialogs/mint/mint-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  type: string;
  grade: string;
  purchasePrice: number;
  location?: string;
  gradeReference?: string;
  dateCollected?: string;
  purchasedFrom?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, type: 'I', grade: 'EF-40', purchasePrice: 25, location: 'home', gradeReference: '238d88299', dateCollected: 'Jan 2nd 1999', purchasedFrom: 'Barry'},
  {position: 2, type: 'III', grade: 'MS-60', purchasePrice: 300, location: 'home', gradeReference: '238d88299'},
  {position: 3, type: 'I', grade: 'MS-60', purchasePrice: 400, location: 'home', gradeReference: '238d88299'},
  {position: 4, type: 'III', grade: 'MS-60', purchasePrice: 60, location: 'home', gradeReference: '238d88299'},
  {position: 5, type: 'III', grade: 'MS-60', purchasePrice: 566, location: 'home', gradeReference: '238d88299'},
  {position: 6, type: 'II', grade: 'MS-60', purchasePrice: 400, location: 'home', gradeReference: '238d88299', purchasedFrom: 'Barry'},
  {position: 7, type: 'II', grade: 'MS-63', purchasePrice: 200, location: 'home'},
  {position: 8, type: 'II', grade: 'MS-60', purchasePrice: 100, location: 'home'},
  {position: 9, type: 'I', grade: 'MS-66', purchasePrice: 88, location: 'home'},
  {position: 10, type: 'III', grade: 'MS-60', purchasePrice: 66, location: 'home'},
];

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})

export class CoinDetailsComponent implements OnInit {
  coin: Coin;
  denomination: string;
  year: number;
  displayedColumns: string[] = ['position', 'type', 'grade', 'purchasePrice', 'location', 'gradeReference', 'dateCollected', 'purchasedFrom', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coinService: CoinService,
    private historyInfoService: HistoryInfoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
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

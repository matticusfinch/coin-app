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
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
    this.dataSource.sort = this.sort;
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

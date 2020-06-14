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

  oneCent = [
    {
      year: '1864',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      altText: '{{card.year}} {{card.denom}}',
      denom: 'One Cent'
    },
    {
      year: '1865',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1872',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1873',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1876',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1880',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1885',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1888',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1890',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1894',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1896',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1904',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1907',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1909',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1913',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1917',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1920',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1929',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1936',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1938',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1940',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1941',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1942',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1943',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1944',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    },
    {
      year: '1947',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'One Cent'
    }
  ];

  fiveCent = [
    {
      year: '1865',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Five Cent'
    },
  ];

  tenCent = [
    {
      year: '1865',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Ten Cent'
    },
  ];

  twentyCent = [
    {
      year: '1865',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Twenty Cent'
    },
  ];

  twentyFiveCent = [
    {
      year: '1912',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Twenty Five Cent'
    },
  ];

  fiftyCent = [
    {
      year: '1870',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Fifty Cent'
    },
  ];

  twoDollar = [
    {
      year: '1865',
      description: 'Some quick example text to build on the card year and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      denom: 'Two Dollar'
    },
  ];
  constructor(private activatedRoute:ActivatedRoute) {
    this.denomination = this.activatedRoute.snapshot.params.denom;
   }   

  ngOnInit(): void {
    // this.cards = this.denomination;
    this.getList(this.denomination);
  }

  getList(denom:string): void {
    switch(denom) {
      case 'one-cent':
        this.cards = this.oneCent;
        break;
      case 'five-cent':
        this.cards = this.fiveCent;
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Coin Manager');
    this.metaService.addTags([
      { name: 'description', content: 'Collect Newfoundland coins with a free to use collection manager that is easy to use and easy to setup!' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

}

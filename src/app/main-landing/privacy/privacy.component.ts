import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Privacy Policy | Coin Manager');
    this.metaService.addTags([
      { name: 'description', content: 'We take your privacy seriously and we\'re not interested in monetizing your data.' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}

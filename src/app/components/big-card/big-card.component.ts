import { Component, Input, OnInit } from '@angular/core';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() cardDate: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() id: string = '0';

  constructor() { }

  ngOnInit(): void {
    this.getFeatured();
  }

  private getFeatured() {
    const result = fakeData.filter(data => data.isFeatured);
    this.id = result[0].id;
    this.photoCover = result[0].photo;
    this.cardDate = result[0].date;
    this.cardTitle = result[0].title;
    this.cardDescription = result[0].description;
  }
}

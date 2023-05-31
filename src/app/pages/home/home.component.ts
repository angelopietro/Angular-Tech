import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listData: {};
  constructor() { }

  ngOnInit(): void {
    this.getFeatured();
  }

  private getFeatured() {
    this.listData = fakeData.filter((featured) => !featured.isFeatured);
  }

}

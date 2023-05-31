import { Component, Input, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() cardDate: string = '';
  @Input() cardTitle: string = '';
  @Input() id: string = '0';
  constructor() {}

  ngOnInit(): void {
  }
}

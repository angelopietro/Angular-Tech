import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() cardDate: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.setValuesToComponent(this.id);
  }

  private setValuesToComponent(id: string) {
    const result = fakeData.filter(data => data.id === id);
    this.photoCover = result[0].photo;
    this.cardDate = result[0].date;
    this.cardTitle = result[0].title;
    this.cardDescription = result[0].description;
  }
}

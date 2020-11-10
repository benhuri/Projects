import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-main-series',
  templateUrl: './main-series.component.html',
  styleUrls: ['./main-series.component.scss']
})
export class MainSeriesComponent implements OnInit {
  seriesNames = ['Suits', 'Game of Thrones', 'Breaking Bad', 'The Sopranos', 'The Last Dance']
  seriesData = {};
  seasons = {};

  constructor(private seriesService: SeriesService) {

   }

  ngOnInit(): void {
    this.seriesNames.forEach(x => {
      this.seriesService.getSeriesData(x).subscribe(data => {
        this.seriesData[x] = data;
        this.seasons[x] = Array(+this.seriesData[x]["totalSeasons"]).fill(0).map((x,i)=>i);
      }) 
    });



  }

}

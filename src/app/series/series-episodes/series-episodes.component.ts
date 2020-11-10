import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesService } from '../series.service';
import {MatDialog} from '@angular/material/dialog';
import { EpisodeDialogContentComponent } from '../episode-dialog-content/episode-dialog-content.component';

export interface DialogData {
  title: string,
  runtime: string,
  genre: string,
  plot: string,
  poster: string
}

@Component({
  selector: 'app-series-episodes',
  templateUrl: './series-episodes.component.html',
  styleUrls: ['./series-episodes.component.scss']
})
export class SeriesEpisodesComponent implements OnInit {
  seriesName;
  season;
  episodesData = {};

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      this.seriesName = params['series'];
      this.season = params['season'];
      this.seriesService.getSeasonData(this.seriesName, this.season).subscribe(data => {
        this.episodesData = data["Episodes"];
      });
    });

    
  }

  openDialog(episodeNum) {
    let episodeData = {};
    this.seriesService.getSeasonEpisodeData(this.seriesName, this.season, episodeNum).subscribe(data => {
      //this.episodesData = data["Episodes"];
      episodeData["title"] = data["Title"];
      episodeData["runtime"] = data["Runtime"];
      episodeData["genre"] = data["Genre"];
      episodeData["plot"] = data["Plot"];
      episodeData["poster"] = data["Poster"];
    });
    const dialogRef = this.dialog.open(EpisodeDialogContentComponent, {
      data: episodeData
    });
  
  }

}

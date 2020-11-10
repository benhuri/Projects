import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../series-episodes/series-episodes.component';

@Component({
  selector: 'app-episode-dialog-content',
  templateUrl: './episode-dialog-content.component.html',
  styleUrls: ['./episode-dialog-content.component.scss']
})
export class EpisodeDialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}

  ngOnInit(): void {
    
  }

}

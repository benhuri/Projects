import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MainSeriesComponent } from './series/main-series/main-series.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeriesEpisodesComponent } from './series/series-episodes/series-episodes.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatDialogModule } from '@angular/material/dialog';
import { EpisodeDialogContentComponent } from './series/episode-dialog-content/episode-dialog-content.component';




@NgModule({
  declarations: [
    AppComponent,
    MainSeriesComponent,
    SeriesEpisodesComponent,
    EpisodeDialogContentComponent,
    EpisodeDialogContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    InputsModule,
    BrowserAnimationsModule,
    GridModule,
    MatDialogModule
  ],
  entryComponents: [EpisodeDialogContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

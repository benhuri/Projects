import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesEpisodesComponent } from './series/series-episodes/series-episodes.component';

const appRoutes: Routes = [
  {path: ':series', children: [
    {path: ':season', component:SeriesEpisodesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

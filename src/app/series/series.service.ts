import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class SeriesService {
    constructor(private httpClient: HttpClient) {}

    getSeriesData(seriesName: string){
        return this.httpClient.get('http://www.omdbapi.com/?t='+seriesName+'&apikey=876526d6');
    }

    getSeasonData(seriesName: string, seasonNum){
        return this.httpClient.get('http://www.omdbapi.com/?t='+seriesName+'&apikey=876526d6&season='+seasonNum);
    }

    getSeasonEpisodeData(seriesName: string, seasonNum, episodeNum: string){
        return this.httpClient.get('http://www.omdbapi.com/?t='+seriesName+'&apikey=876526d6&season='+seasonNum+'&Episode='+episodeNum);
    }

    getSeasonEpisodeImg(seriesName: string, seasonNum, episodeNum: string){
        return this.httpClient.get('http://img.omdbapi.com/?t='+seriesName+'&apikey=876526d6&season='+seasonNum+'&Episode='+episodeNum);
    }
}
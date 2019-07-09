import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService extends DataService{

  constructor(http: HttpClient) {
     super('https://api.themoviedb.org/3/movie/now_playing?api_key=a12dec6ba486ddc09e6d408e65cc3212&language=en-US&page=1&region=US', http);
   }
}

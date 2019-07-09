import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewReleasesService {
  url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a12dec6ba486ddc09e6d408e65cc3212&language=en-US&page=1&region=US';
  constructor(private http: HttpClient) { }

   getAll() {
    return this.http.get(this.url);
  }
}

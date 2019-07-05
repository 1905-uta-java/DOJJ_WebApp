import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getMovie(url: string) {
    // DEFINE GET MOVIE HERE
    console.log('Getting requested movie!');
    return this.http.get(url);
  }
}

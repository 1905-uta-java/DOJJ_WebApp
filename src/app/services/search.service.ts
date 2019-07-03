import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // EDIT THIS URL LATER!
  // baseUrl : string = "https://api.themoviedb.org/3/search/movie?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US&query=";
  // userInput : string = "";
  // replace spaces with %20 
  // url : string = this.baseUrl + '/' + this.userInput;
  // EXAMPLE REQUEST: https://api.themoviedb.org/3/search/movie?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US&query=The%20avengers

  constructor(private http: HttpClient) { }

  getMovie(url : string)
  {
    // DEFINE GET MOVIE HERE
    console.log("Getting requested movie!");
    return this.http.get(url);
    
  }
}

import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'movie-review';
  baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US&query=';
  requestUrl = '';
  currentMovie: Movie = {title : undefined, description : undefined, id : undefined};
  apiKey = '19fd2eec2c34304e81d242a6fe7020f5';
  returnedSearch: any = [];
  searched: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.searched = params.result;
      });



    // clean user results to fit API calls
    this.requestUrl = this.baseUrl + this.searched;
    console.log(this.requestUrl + ' IS THE FINAL REQUEST URL!!!');

    // use service to get movie results
    this.searchService.getMovie(this.requestUrl).subscribe((information) => {
      this.returnedSearch = information;
      console.log(this.returnedSearch.results);


    });
  }
}

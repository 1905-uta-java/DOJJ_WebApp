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
  noResults = false;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) {}
  ngOnInit() {
    // use constructor to obtain user input from search and place user input in search variable
    this.route.params.subscribe(params => {
        this.searched = params.result;
      });



    // use obtained parameters-- obtained user input-- to assemble the request URL
    this.requestUrl = this.baseUrl + this.searched;
    console.log(this.requestUrl + ' IS THE FINAL REQUEST URL!!!');

    // use service to get movie results
    this.searchService.getMovie(this.requestUrl).subscribe((information) =>
    {
      this.returnedSearch = information;
      //Check if results is 0
      if (this.returnedSearch.results.length === 0)
      {
        // do something in the html
        this.noResults = true
      }
      else
      {
        this.noResults = false;
      }
      console.log(this.returnedSearch);


    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  isLoggedIn;
  movieId;
  createdReview;
  baseUrl = 'https://api.themoviedb.org/3/find/movie?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US&query=';

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.movieId = params.id;
        console.log(this.movieId);
      });
  }

  setCreatedReview(review) {
    this.createdReview = review;
  }

}

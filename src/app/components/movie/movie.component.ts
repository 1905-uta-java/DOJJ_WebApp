import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  isLoggedIn;
  movieId;
  createdReview;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.movieId = params.id;
        this.movieId = params.loggedIn;
      });
  }

  setCreatedReview(review) {
    this.createdReview = review;
  }

}

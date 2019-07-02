import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewsService {

  constructor(private http: HttpClient) { }
  // URL to the server
  reviewsUrl = '';

  // Get reviews for a movie
  getReviews(movieId: number) {

  }

  postReview() {

  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ReviewsService {

  constructor(private http: HttpClient) { }
  // URL to the server
  reviewsUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/review';

  // Get reviews for a movie
  getReviews(movieId: string) {
    return this.http.get(this.reviewsUrl + '/' + movieId);
  }

  // Create a new review for a movie
  postReview(review) {
    return this.http.post(this.reviewsUrl, review, {responseType: 'text'});
  }

  // Update a review for a movie
  putReview() {

  }

  // Delete a review for a movie
  deleteReview() {

  }



}

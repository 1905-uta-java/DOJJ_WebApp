import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReputationService {
  Url = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/rep';

  constructor(private http: HttpClient) { }

  // Update a review for a movie
  putRep(user, review) {
    // return review object
     return this.http.put(this.Url, {u: user, r: review}, {responseType: 'text'});


   }
}

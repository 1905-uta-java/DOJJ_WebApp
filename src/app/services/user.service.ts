import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // URL to the server
  userUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/users';

  // Get reviews for a movie
  getUser(username: string) {
    return this.http.get(this.userUrl + '/' + username);
  }

  // Create a new review for a movie
  postUser(user) {
    return this.http.post(this.userUrl, user, {responseType: 'text'});
  }

  validPassword(user) {
    return this.http.put(this.userUrl + '/valid', user, {responseType: 'text'});
  }

  changePassword(user) {
    return this.http.put(this.userUrl + '/change', user, {responseType: 'text'});
  }

  // Update a review for a movie
  putUser(user) {
    return this.http.put(this.userUrl, user, {responseType: 'text'});
  }

  // Delete a review for a movie
  deleteUser() {

  }
}

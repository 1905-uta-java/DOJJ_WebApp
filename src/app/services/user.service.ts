import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // URL to the server
  userUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/user';

  // Get reviews for a movie
  getUser(username: string) {
    return this.http.get(this.userUrl + '/' + username);
  }

  // Create a new review for a movie
  postUser(user) {
    console.log(user);
    return this.http.post(this.userUrl, user, {responseType: 'text'});
  }

  // Update a review for a movie
  putUser(user) {
    console.log(user);
    console.log("User service has been reached!");
    return this.http.put(this.userUrl, user).subscribe(response => {});
  }

  // Delete a review for a movie
  deleteUser() {

  }
}

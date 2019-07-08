import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // URL to the server
  reviewsUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/login';

  // Create a new review for a movie
  postLogin(usname, pass) {
    const login = {email: '', username: usname, password: pass, reputation: 0, privilege: ''};
    return this.http.post(this.reviewsUrl, login);
  }
}

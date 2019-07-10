import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateNewUserService {

  constructor(private http: HttpClient) {}

      // URL to the server
    userUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/users';


    // Create a new review for a movie
    postNewUser(mail, usname, pass) {
      const user = {email: mail, username: usname, password: pass};
      return this.http.post(this.userUrl, user, {responseType: 'text'});
    }
}

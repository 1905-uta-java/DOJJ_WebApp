import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateNewUserService {

  constructor(private http: HttpClient) {}
 
      // URL to the server
    newUserUrl = 'http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/users';

    // Create a new review for a movie
    submitPasswordChange(mail, usname, pass) {
      const updatePassword = {email: mail, username: usname, password: pass, reputation: 0, privilege: ''};
      return this.http.put(this.newUserUrl, updatePassword);
    }
}

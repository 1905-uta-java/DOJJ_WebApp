import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  url : string = "http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/users";

  constructor(private http : HttpClient) { }

  banUser(username : string)
  {
    console.log("This user is aboutk to be banned!");
    return this.http.delete(this.url + "/" + username);
  }
}

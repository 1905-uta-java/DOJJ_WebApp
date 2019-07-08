import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  constructor(private http : HttpClient) { }

  banUser(url : string)
  {
    console.log("This user is aboutk to be banned!");
    return this.http.delete(url);
  }
}

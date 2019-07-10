import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatresNearbyService extends DataService{

  constructor(http: HttpClient) {
    // add appropriate headers to the HTTP request 
    const headers = new HttpHeaders()
      .set('x-api-key', 'qi1ipuk0lUcE7amJd6gEYywsPm96A1ZX');
    const x = localStorage.getItem('x');
    const y = localStorage.getItem('y');
    console.log(`x is ` + x);
    console.log(`y is ` + y);

    // send request
    // use location of client IP address instead
    // 30 mi radius
     super(`https://api.internationalshowtimes.com/v4/cinemas/?location=${x},${y}&distance=30`, http, headers);
   }
}

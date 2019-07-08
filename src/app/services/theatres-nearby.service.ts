import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatresNearbyService extends DataService{

  constructor(http: HttpClient) {
    const currentTime = new Date();
    currentTime.toString();
    // add appropriate headers to the HTTP request 
    const headers = new HttpHeaders()
      .set('x-api-key', 'qi1ipuk0lUcE7amJd6gEYywsPm96A1ZX');

    // send request
    // use location of client IP address instead
    // 30 mi radius
     super('https://api.internationalshowtimes.com/v4/cinemas/?location=32.730700,-97.114101&distance=30', http, headers);
   }
}

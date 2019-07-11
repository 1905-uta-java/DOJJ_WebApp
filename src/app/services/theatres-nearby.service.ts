import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatresNearbyService extends DataService {

  constructor(http: HttpClient) {
    // add appropriate headers to the HTTP request
    const headers = new HttpHeaders()
      .set('x-api-key', 'qi1ipuk0lUcE7amJd6gEYywsPm96A1ZX');
    const x = localStorage.getItem('x');
    const y = localStorage.getItem('y');

    localStorage.setItem('mapurl', `https://api.internationalshowtimes.com/v4/cinemas/?location=${x},${y}&distance=30`);

    // send request
    // use location of client IP address instead
    // 30 km radius
    super(http, headers);
   }
}

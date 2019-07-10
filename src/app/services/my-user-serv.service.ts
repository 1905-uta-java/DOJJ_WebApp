import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { DataService } from './data.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found-error';
import { AppError } from '../common/validators/app-error';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class MyUserServService {

  constructor(private http: HttpClient) { }

 // get ip with API service
  getIpAddress() {
      return this.http
            .get('http://api.ipstack.com/check?access_key=61d3894941d5cf4bea7c1d3f80d16b8f&format=1&language=en').pipe(
            map(response => response || {})).pipe(
            catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse):
      Observable<any> {
        //Log error in the browser console
        console.error('observable error: ', error);

        return Observable.throw(error);
    }
}



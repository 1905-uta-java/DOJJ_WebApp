import { BadInput } from '../common/validators/bad-input';
import { AppError } from './../common/validators/app-error';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/validators/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private headers: HttpHeaders) { }

  getAll(url) {
      return this.http.get(url, {headers: this.headers}).pipe
      (map(response => response)).pipe
      (catchError(this.handleError));
  }

  create(resource: { title: string; }, url) {
    return this.http.post(url, JSON.stringify(resource)).pipe
    (map(response => response)).pipe
    (catchError(this.handleError));
  }

  update(resource, url){
    return this.http.patch(url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe
      (map(response => response)).pipe
      (catchError(this.handleError));
  }

  delete(id, url){
    return this.http.delete(url + '/' + id).pipe
    (map(response => response)).pipe
    (catchError(this.handleError));
  }

  private handleError(error: Response){
    if (error.status===400)
      return Observable.throw(new BadInput(error.json));
    if (error.status===404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error));
  }

}


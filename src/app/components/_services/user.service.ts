import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { User } from 'src/app/components/_models/User'


export interface ModelPaging {
  array: any[];
  maxItems: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postUser(user: User) {
    return this.http.post(this.baseurl, user, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.baseurl + username, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  modifyUser(username: string, user: User) {
    return this.http.patch(this.baseurl + username, user, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

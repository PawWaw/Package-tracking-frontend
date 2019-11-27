import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { InPost } from 'src/app/components/_models/InPostModels/InPost';
import { DHL } from 'src/app/components/_models/DHLModels/DHL';
import { PocztaPolska } from 'src/app/components/_models/PocztaPolskaModels/PocztaPolska';
import { UPS } from 'src/app/components/_models/UPSModels/UPS';
import { Fedex } from 'src/app/components/_models/FedexModels/Fedex';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PackageService {
  dhlurl = 'http://localhost:8080/package/dhl';
  inposturl = 'http://localhost:8080/package/inpost';
  pocztapolskaturl = 'http://localhost:8080/package/pocztapolska';
  upsurl = 'http://localhost:8080/package/ups';
  fedexurl = 'http://localhost:8080/package/fedex';

  constructor(private http: HttpClient) {
  }
 
  httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public getDHL(): Observable<DHL> {
    return this.http.get<DHL>(this.dhlurl, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getSingleDHL(code: string): Observable<DHL> {
    return this.http.get<DHL>(this.dhlurl + "/" + code, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getFedex(): Observable<Fedex> {
    return this.http.get<Fedex>(this.fedexurl, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getSingleFedex(code: string): Observable<Fedex> {
    return this.http.get<Fedex>(this.fedexurl + "/" + code, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getInPost(): Observable<InPost> {
    return this.http.get<InPost>(this.inposturl, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getSingleInPost(code: string): Observable<InPost> {
    return this.http.get<InPost>(this.inposturl + "/" + code, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getPocztaPolska(): Observable<PocztaPolska> {
    return this.http.get<PocztaPolska>(this.pocztapolskaturl, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getSinglePocztaPolska(code: string): Observable<PocztaPolska> {
    return this.http.get<PocztaPolska>(this.pocztapolskaturl + "/" + code, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getUPS(): Observable<UPS> {
    return this.http.get<UPS>(this.upsurl, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getSingleUPS(code: string): Observable<UPS> {
    return this.http.get<UPS>(this.upsurl + "/" + code, {headers: this.httpHeader}).pipe(retry(1), catchError(this.errorHandler));
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

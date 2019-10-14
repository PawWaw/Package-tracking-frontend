import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Config {
  heroesUrl: String;
  textfile: String;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_KEY = 'YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  public getNews(){
    return this.http.get('http://localhost:8080/delivery/string');
  }
}

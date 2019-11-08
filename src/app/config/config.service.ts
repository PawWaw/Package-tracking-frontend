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

  public getNews(code: String){
    return this.http.get('http://localhost:8080/delivery/' + code);
  }

  public getInPost(code: String){
    return this.http.get('http://localhost:8080/package/inpost/' + code);
  }

  public getPocztaPolska(code: String){
    return this.http.get('http://localhost:8080/package/pocztapolska/' + code);
  }

  public allegroGetToken(){
    return this.http.get('http://localhost:8080/allegro/checkToken');
  }

  public allegroEraseToken(){
    return this.http.get('http://localhost:8080/allegro/erase');
  }

  public allegroGetMe(){
    return this.http.get('http://localhost:8080/allegro/me');
  }
}

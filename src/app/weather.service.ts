import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

url: string;


  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=belgrade&APPID=f53e8cc7e74737667382d42c36dba08b&units=metric';
   }

   getWeather(){
     return this.http.get(this.url);
   }
}

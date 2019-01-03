import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';
import { Weather } from '../models/meteo.models';
import { weather } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  get(city: City): Observable<Weather>{
    return this.http.get<Weather>(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${
      city.address.county
      }&appid=${
      weather.key
      }`
    );
  }
}

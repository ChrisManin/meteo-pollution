import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';
import { Pollution } from '../models/pollution.model';
import { pollution } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {

  constructor(private http: HttpClient) { }
  
  get(city: City): Observable<Pollution>{
    return this.http.get<Pollution>(
      `https://api.waqi.info/feed/${
      city.address.county
      }/?token=${
      pollution.key
      }`
    );
  }
}

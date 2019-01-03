import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { City } from '../shared/models/city.model';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/models/meteo.models';


@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {

  @Input() city: City;

  @Output() onCity: EventEmitter<City>;

  constructor(private snack: MatSnackBar,
    private weatherService: WeatherService) {
      this.city = new City;// this.findMeteo();
      this.onCity = new EventEmitter;
    }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.city && this.city.address && !this.city.weather) {
      this.findMeteo();
    }
  };

  ngOnInit() {
  }

  findMeteo() {
    alert("find meteo");
    this.weatherService.get(this.city).subscribe(
      (weather: Weather) => {
        this.city.weather = weather;
        // Il y a quoi inside ?
        console.log(weather);
        
        // todo success event
      },
      () => {
        this.snack.open("Meteo error", "Undo", { duration: 3000 });
        // todo error event
      }

    );
  }
}

 




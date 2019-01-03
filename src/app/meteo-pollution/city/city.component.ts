import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/models/city.model';
import { LocationIqService } from '../shared/services/location-iq.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { LocationIQ } from '../shared/models/location-iq.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: City;
  // localisation: boolean = false;
  @Output() onCity: EventEmitter<City>;

  constructor(private locationIQService: LocationIqService,
              private snackbar: MatSnackBar) 
  {
    this.findLocation();
    this.onCity = new EventEmitter;
  }

  ngOnInit() {
  }

  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => {
        this.city.position = event;
        this.findCityName();
      },
      (event: PositionError) => this.snackbar.open(
        "Géolocation failed !", "Retry").onAction().subscribe(this.findLocation)
    );
  }

  findCityName(): Subscription {
    // this.localisation = true;
    return this.locationIQService.get(this.city.position).subscribe(
      (locationIQ: LocationIQ) => {
        this.city.address = locationIQ.address;
        this.onCity.emit(this.city);
      },
      (error: HttpErrorResponse) => this.snackbar.open(
        "City location Error",
        "Retry"
      ).onAction().subscribe(() => this.findCityName)
    )
    // () => this.openSnackBar("City location error !", "Retry")
  }

  // openSnackBar(message: string, action: string) {
  //   this.snackbar.open(message, action, {
  //     duration: 15000,
  //   }).onAction().subscribe(() => this.findLocation()
  //   );
  // }

}

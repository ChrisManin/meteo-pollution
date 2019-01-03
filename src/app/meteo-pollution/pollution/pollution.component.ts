import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { City } from '../shared/models/city.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pollution } from '../shared/models/pollution.model';
import { PollutionService } from '../shared/services/pollution.service';

@Component({
  selector: 'mp-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.scss']
})
export class PollutionComponent implements OnInit, OnChanges {

  @Input() city: City;

  @Output() onCity: EventEmitter<City>;

  constructor(private snack: MatSnackBar,
              private pollutionService: PollutionService) {
    // this.findPollution();
    this.onCity = new EventEmitter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.city && this.city.address && !this.city.pollution) {
      this.findPollution();
    }
  }

  ngOnInit() {
  }

  findPollution() {
    alert("find pollution");
    this.pollutionService.get(this.city).subscribe(
      (pollution: Pollution) => {
        this.city.pollution = pollution;
        // Il y a quoi inside ?
        console.log(pollution);

        // todo success event
      },
      () => {
        this.snack.open("Meteo error", "Undo", { duration: 3000 });
        // todo error event
      },

    );
  }



}    

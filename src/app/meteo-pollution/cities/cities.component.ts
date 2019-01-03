import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { City } from '../shared/models/city.model';
import { Address } from '../shared/models/address.model';
import { CitiesService } from '../shared/services/cities.service';

@Component({
  selector: 'mp-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  // citiesList: Array<string> = ["Lyon", "Grenoble", "Saint-Etienne", "Valence"]

  public cityForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private citiesService: CitiesService) {
    this.cityForm = this.createCityForm();
  }

  createCityForm(): FormGroup {
    return this.formBuilder.group({
      cityName: ["", [
        Validators.minLength(2),
        Validators.maxLength(32),
      ]]
    });
  }

  onSubmit(event: MSInputMethodContext) {
    
    const input = event.target;
    /**
     * @type {FormControl}
     *  C'est notre input (le modèle intermédiaire)
     */
    
    const cityName: AbstractControl = this.cityForm.get("cityName");

    if(cityName.valid) {
      const city: City = new City;
      city.address = new Address;
      city.address.county = cityName.value;
      cityName.setValue("");
    }
  }

  ngOnInit() {
  }

}

import { Address } from './address.model';
import { Weather } from './meteo.models';
import { Pollution } from './pollution.model';

export class City {
    nom: string;
    position: Position;
    address: Address;
    weather: Weather;
    pollution: Pollution;
}
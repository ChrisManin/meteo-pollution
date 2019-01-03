import { WeatherMain } from './weatherMain.model';
import { WeatherSys } from './weatherSys.model';
import { WeatherWind } from './weatherWind.model';
import { WeatherDetail } from './weatherDetail.model';

export class Weather {
    main: WeatherMain;
    sys: WeatherSys;
    wind: WeatherWind;
    weather: WeatherDetail[];
}
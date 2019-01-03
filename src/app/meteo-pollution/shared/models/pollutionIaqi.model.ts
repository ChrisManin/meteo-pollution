import { PollutionDew } from './pollutionDew.model';
import { PollutionNo2 } from './pollutionNo2.model';
import { PollutionPm10 } from './pollutionPm10.model';
import { PollutionW } from './pollutionW.model';

export class PollutionIaqi{
    dew: PollutionDew;
    no2: PollutionNo2;
    pm10: PollutionPm10;
    w: PollutionW;
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeteoPollutionComponent } from './meteo-pollution/meteo-pollution.component';
import { MeteoPollutionModule } from './meteo-pollution/meteo-pollution.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MeteoPollutionModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarV2Component } from './calendar-v2/calendar-v2.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarV2Component,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

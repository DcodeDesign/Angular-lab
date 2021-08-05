import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarMonthComponent} from './shared/components/calendar/calendar-month/calendar-month.component';
import {CalendarWeekComponent} from './shared/components/calendar/calendar-week/calendar-week.component';
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {DirectiveModule} from "./shared/components/exemple/directive/directive.module";


@NgModule({
  declarations: [
    AppComponent,
    CalendarMonthComponent,
    CalendarWeekComponent,
    TruncatePipe
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Component, Output, EventEmitter, OnInit} from '@angular/core';

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  public dates: Array<Date>;
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public date = new Date();
  public currentDate = new Date(Date.now());
  @Output() selected = new EventEmitter();

  constructor() {
    this.dates = this.getCalendarDays(this.date);
  }

  ngOnInit(): void {
  }

  public setMonth(inc) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }

  public isSameMonth(date) {
    return date.getMonth() === this.date.getMonth();
    // return date.getMonth() === this.date.getMonth();
  }

  public isDateNow(date) {
    return date.toLocaleDateString() === this.currentDate.toLocaleDateString()
  }

  private getCalendarDays(date = new Date) {
    const calendarStartTime = this.getCalendarStartDay(date).getTime();

    return this.range(1, 42)
      .map(num => new Date(calendarStartTime + DAY_MS * num));
  }

  private getCalendarStartDay(date = new Date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1, 7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 0)
  }

  private range(start, end, length = end - start + 1) {
    return Array.from({length}, (_, i) => start + i)
  }


}

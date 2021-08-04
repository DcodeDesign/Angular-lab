import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-v2',
  templateUrl: './calendar-v2.component.html',
  styleUrls: ['./calendar-v2.component.scss']
})
export class CalendarV2Component implements OnInit {
  public arrayDays = [];
  public date = new Date();
  public selectedDate: Date | string;
  public days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public curDay = this.date.getDate() - this.date.getDay()

  constructor() {
  }

  ngOnInit(): void {
    this.curWeek();
  }

  private curWeek() {
    this.arrayDays = [];
    this.date = new Date(this.date.setDate(this.curDay))
    this.range(0, 6)
      .map((num) => {
          this.arrayDays.push(
            {
              date: new Date(this.date.setDate(this.date.getDate() + 1)),
              day: this.days[num]
            }
          );
        }
      )
  }

  public next() {
    this.date.setDate(this.date.getDate() + 1);
    this.curDay = this.date.getDate() - this.date.getDay()
    console.log(this.date)
    this.curWeek();
  }

  public before() {
    this.date.setDate(this.date.getDate() - 8);
    this.curDay = this.date.getDate() - this.date.getDay()
    console.log(this.date)
    this.curWeek();
  }

  private range(start, end, length = end - start + 1) {
    return Array.from({length}, (_, i) => start + i)
  }

}

import {Component, Input, OnInit, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import {Observable, Subscribable, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit, OnChanges, DoCheck {
  @Input() twoWay: string[];
  @Output() twoWayChange = new EventEmitter<string[]>();

  @Input() myDataBis: string[];
  @Input() myData: string[];
  @Output() myDataChange = new EventEmitter<string[]>();
  @Output() myDataChangeBis = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit-----')
    console.log(this.myData)
    console.log(this.myDataBis)
  }

  ngOnChanges(): void {
    console.log('ngOnChanges-----')
    console.log(this.myData)
    console.log(this.myDataBis)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck-----')
    console.log(this.myData)
    console.log(this.myDataBis)
  }


  changeText(value: string[]) {
    this.myDataChange.emit(value);
  }

  changeTextBis(value: string[]) {
    this.myDataChangeBis.emit(value);
  }

  changeTwoWay(value: string[]) {
    this.twoWayChange.emit(value);
  }

}

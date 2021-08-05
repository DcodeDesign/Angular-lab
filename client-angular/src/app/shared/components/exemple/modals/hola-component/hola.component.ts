import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'hola',
  template: `<h1>Hola {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HolaComponent implements OnInit {
  @Input() name: string;
  @Output() public hola:EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    this.hola.next("HolaComponent Created!")
  }
}

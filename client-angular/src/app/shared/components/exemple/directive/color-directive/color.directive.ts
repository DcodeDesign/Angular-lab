import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]',
  exportAs: 'tooltip'
})
export class ColorDirective implements OnInit{
  @Input('appColor') public stringColor: string | undefined;
  @Input('HexaColor') public hexaColor: string;

  @Input() tooltip: string
  private currentElement: HTMLElement = null;

  constructor(private el: ElementRef<any>) {

    this.currentElement = el.nativeElement
  }

  ngOnInit(): void {
    console.log(this.tooltip)
    if(this.stringColor) {
      this.currentElement.style.color = this.stringColor
    } else {
      this.currentElement.style.color = this.hexaColor
    }

  }

}

import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @HostListener('mouseenter', ['$event']) private surligneEvent = this.surligne

  @HostListener('mouseleave', ['$event']) private normalEvent = this.normal

  constructor(private el: ElementRef) { }

  private surligne(event: MouseEvent): void {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  private normal(event: MouseEvent): void {
    this.el.nativeElement.style.backgroundColor = 'initial';
  }


}

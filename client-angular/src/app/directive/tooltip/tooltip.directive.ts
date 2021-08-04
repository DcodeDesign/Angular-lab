import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild, ViewChildren
} from '@angular/core';


@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip',
  host: {
    '[style.background-color]': '"yellow"',
    '[style.color]': '"red"'
  }
})
export class TooltipDirective implements OnInit, AfterViewInit {
  @ViewChildren('.style-tooltip') styleTooltip: ElementRef;
  @Input() appTooltip;
  public divTooltip: HTMLElement;
  public textTooltip: string;
  public domElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit() {
    this.divTooltip = this.renderer.createElement('div');
    this.textTooltip = this.renderer.createText(this.appTooltip);
    this.renderer.appendChild(this.divTooltip, this.textTooltip);
    this.renderer.appendChild(this.el.nativeElement, this.divTooltip);
    this.renderer.setAttribute(this.divTooltip, 'class', 'style-tooltip');
  }

  @HostListener("mouseover")
  showTooltip() {
    this.renderer.addClass(this.divTooltip, 'show-tooltip');
    this.domElement = this.divTooltip;
    const requiredStyles = {
      'background-color': 'yellow',
      'color': 'red',
      'font-weight': 'bold',
      //...and so on
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    })
  }

  @HostListener("mouseout")
  removeTooltip() {
    this.renderer.removeStyle(this.divTooltip, '*');
  }

  ngOnInit(): void {
    console.log()
  }

}

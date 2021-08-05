import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener, Inject,
  Input,
  OnInit,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {DOCUMENT} from "@angular/common";


@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip',
  host: {
    '[style.position]': '"relative"'
  }
})
export class TooltipDirective implements AfterViewInit {
  @ViewChildren('.style-tooltip') styleTooltip: ElementRef;
  @Input() appTooltip;
  @Input() TooltipW;
  public divTooltip: HTMLElement;
  public textTooltip: string;
  public domElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit() {
    this.initTooltip();
    console.log(this.TooltipW)
  }

  public initTooltip() {
    this.divTooltip = this.renderer.createElement('div');
    this.textTooltip = this.renderer.createText(this.appTooltip);
    this.renderer.appendChild(this.divTooltip, this.textTooltip);
    this.renderer.appendChild(this.el.nativeElement, this.divTooltip);
    this.renderer.setAttribute(this.divTooltip, 'class', 'style-tooltip');
    this.domElement = this.divTooltip;
    const tooltipW = this.TooltipW ? this.TooltipW + 'px': 'initial';
    console.log(tooltipW,this.TooltipW)
    const requiredStyles = {
      'background-color': 'black',
      'color': '#fff',
      'text-align': 'left',
      'border-radius': '6px',
      'padding': '3px 5px',
      'display': 'none',
      'position': 'absolute',
      'max-width': '320px',
      'transform-origin': 'top left',
      'z-index': '999',
      'width': tooltipW
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    })
  }

  @HostListener("mouseover")
  showTooltip() {
    const requiredStyles = {
      'display': 'block',
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    })

    const heightToolTip = this.el.nativeElement.firstElementChild.offsetHeight;
    const heightCurElem = this.el.nativeElement.offsetHeight;
    const heightWindow = this.document.body.clientHeight;
    const elementBottom = heightWindow - this.el.nativeElement.offsetTop;
    let top = 0;
    if (parseInt(heightToolTip, 10) + parseInt(heightCurElem, 10) > elementBottom) {
      top = (heightToolTip) * -1;
      const requiredStylesSecond = {
        'top': `${top}px`,
      };
      Object.keys(requiredStylesSecond).forEach(newStyle => {
        this.renderer.setStyle(
          this.domElement, `${newStyle}`, requiredStylesSecond[newStyle]
        );
      })
    }


    // console.log(this.el.nativeElement.querySelector('.style-tooltip').clientHeight)
    // console.log(this.el.nativeElement.offsetHeight)
    // console.log(this.el.nativeElement.firstElementChild.offsetHeight)
  }


  @HostListener("mouseout")
  removeTooltip() {
    const requiredStyles = {
      'display': 'none'
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    })
  }

}

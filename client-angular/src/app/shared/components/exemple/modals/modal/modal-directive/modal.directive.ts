// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

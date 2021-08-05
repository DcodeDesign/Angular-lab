import {Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "./modal.service";

@Directive({
  selector: '[ModalClose]'
})
export class ModalDirective implements OnDestroy{
  @Input('ModalClose') public data: any;

  constructor(private newModalService: ModalService) {}

  ngOnDestroy() {
    this.newModalService.closeDataEmit().next(this.data)
  }

}

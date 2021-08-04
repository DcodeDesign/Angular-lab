import {Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {NewModalService} from "./new-modal.service";

@Directive({
  selector: '[ModalClose]'
})
export class NewModalDirective implements OnDestroy{
  @Input('ModalClose') public data: any;

  constructor(private newModalService: NewModalService) {}

  ngOnDestroy() {
    this.newModalService.closeDataEmit().next(this.data)
  }

}

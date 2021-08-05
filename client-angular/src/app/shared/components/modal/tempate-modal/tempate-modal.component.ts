import {Component, Input} from '@angular/core';
import {ModalService} from "../new-modal/modal.service";

@Component({
  selector: 'app-tempate-modal',
  templateUrl: './tempate-modal.component.html',
  styleUrls: ['./tempate-modal.component.scss']
})
export class TempateModalComponent{
  @Input() data: any | string[];
  constructor(private newModalService: ModalService) {
  }

  public close() {
    this.newModalService.closeEmit().next('close')
  }

}

import {ComponentFactoryResolver, Injectable} from '@angular/core';

import {ModalItem} from "../modal-item/modal-item";

@Injectable()
export class ModalService {

  constructor() { }

  getModal(template: any, data: {}) {
    return [
      new ModalItem(template, data),
    ];
  }
}

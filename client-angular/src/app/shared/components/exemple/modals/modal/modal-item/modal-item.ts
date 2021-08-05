import {ComponentFactory} from '@angular/core';

export class ModalItem {
  constructor(public component: ComponentFactory<unknown | any>, public data: any) {}
}

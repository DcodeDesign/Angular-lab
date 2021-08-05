import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentModalTwoRoutingModule } from './component-modal-two-routing.module';
import {ComponentModalTwoComponent } from './component-modal-two.component';

import {ModalModule} from "./new-modal/modal.module";

@NgModule({
  declarations: [ComponentModalTwoComponent],
  imports: [
    CommonModule,
    ComponentModalTwoRoutingModule,
    ModalModule
  ]
})
export class ComponentModalTwoModule { }

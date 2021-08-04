import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentModalTwoRoutingModule } from './component-modal-two-routing.module';
import {ComponentModalTwoComponent } from './component-modal-two.component';

import {NewModalModule} from "./new-modal/new-modal.module";

@NgModule({
  declarations: [ComponentModalTwoComponent],
  imports: [
    CommonModule,
    ComponentModalTwoRoutingModule,
    NewModalModule
  ]
})
export class ComponentModalTwoModule { }

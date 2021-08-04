import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponentRoutingModule } from './modal-component-routing.module';
import { ModalComponentComponent } from './modal-component.component';

import {ModalModule} from "./modal/modal.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ModalComponentComponent],
  imports: [
    CommonModule,
    ModalComponentRoutingModule,
    ModalModule,
    FormsModule,
  ]
})
export class ModalComponentModule { }

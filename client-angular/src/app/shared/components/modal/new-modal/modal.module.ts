import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from "./modal.component";
import {ModalDirective} from "./modal.directive";
import {TempateModalComponent} from "../tempate-modal/tempate-modal.component";

@NgModule({
  declarations: [ModalComponent, ModalDirective, TempateModalComponent],
  imports: [
    CommonModule
  ]
})
export class ModalModule { }

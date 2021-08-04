import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewModalComponent} from "./new-modal.component";
import {NewModalDirective} from "./new-modal.directive";
import {TempateModalComponent} from "../tempate-modal/tempate-modal.component";

@NgModule({
  declarations: [NewModalComponent, NewModalDirective, TempateModalComponent],
  imports: [
    CommonModule
  ]
})
export class NewModalModule { }

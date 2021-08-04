import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComponentComponent } from './modal-component.component';

const routes: Routes = [{ path: '', component: ModalComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalComponentRoutingModule { }

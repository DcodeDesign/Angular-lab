import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentModalTwoComponent } from './component-modal-two.component';

const routes: Routes = [{ path: '', component: ComponentModalTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentModalTwoRoutingModule { }

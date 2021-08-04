import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {FormsModule} from "@angular/forms";
import {DataBindingComponent} from './data-binding-component/data-binding.component';


@NgModule({
  declarations: [PublicComponent, DataBindingComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule {
}

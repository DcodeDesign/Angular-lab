import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { ColorDirective } from './color-directive/color.directive';
import { ChangeColorDirective } from './change-color-directive/change-color.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  declarations: [DirectiveComponent, ColorDirective, ChangeColorDirective, TooltipDirective],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectiveModule { }

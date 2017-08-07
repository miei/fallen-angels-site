import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CollapseDirective } from './collapse.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    CollapseDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    CollapseDirective
  ]
})
export class SharedModule { }

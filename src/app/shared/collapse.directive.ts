import { Input, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  @Input('appCollapse') targetEl: HTMLElement;

  @HostListener('click') toggleCollapse() {
    this.targetEl.classList.toggle('collapse');
  }
}

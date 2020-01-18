import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArrierePlan]'
})
export class ArrierePlanDirective {
  @HostBinding('style.backgroundColor') bg = '';
  @HostListener('click') click() {
    this.bg = 'yellow';
  }
  constructor() { }

}

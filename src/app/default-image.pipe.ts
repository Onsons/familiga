import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {  return '/assets/img/avatar-png-icon-23.png'; }
    return value;
  }

}

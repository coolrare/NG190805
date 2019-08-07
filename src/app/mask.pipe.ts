import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number = 10): any {
    if (value && value.length > len) {
      return value.substr(0, len / 2) + '***' + value.substr(-len / 2);
    } else {
      return '';
    }
  }

}

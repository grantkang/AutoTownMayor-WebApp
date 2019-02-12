import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bullet'})
export class BulletPipe implements PipeTransform {
  transform(value: string): string {
    let newStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += '\u2022';
    }
    return newStr;
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {

    const endline = args[1] ? args[1] : '';

    if(value === null || value.length <= args[0]) {
      return !value && args[1] ? endline : value;
    }

    return value.slice(0, args[0]) + endline;
  }

}

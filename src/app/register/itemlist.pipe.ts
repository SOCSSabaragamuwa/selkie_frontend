import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemlist'
})
export class ItemlistPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    return null;
  }

}

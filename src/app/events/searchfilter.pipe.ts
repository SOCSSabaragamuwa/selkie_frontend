import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(eventList: any[],field: string, value: string): any[] {
    if(value.length === 0) return eventList;

    return eventList.filter(it => it[field] == value);
  }

}

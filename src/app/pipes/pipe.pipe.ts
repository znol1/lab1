import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(workerElements, searchStr: string) {
    if (workerElements.lenght === 0 || searchStr === '') {
      return workerElements;
    }
    if (searchStr !== null) {
      return workerElements.filter(w => {
        if (w.name !== null) {
          return w.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
        }
      });
    }
  }
}

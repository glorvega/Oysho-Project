import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any[], filter: string): any {
    if (filter === '') {
      return value;
    } else {
      return value.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
}

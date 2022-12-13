import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

@Pipe({
  name: 'filter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filter: string): Product[] {
    if (filter === '') {
      return value;
    } else {
      return value.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
}

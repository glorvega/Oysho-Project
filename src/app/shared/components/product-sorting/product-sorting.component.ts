import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-sorting',
  templateUrl: './product-sorting.component.html',
  styleUrls: ['./product-sorting.component.scss'],
})
export class ProductSortingComponent {
  @Output() sortProducts: EventEmitter<string> = new EventEmitter<string>();

  public onProductSorting(sorting: Event) {
    const inputSort = sorting.target as HTMLInputElement;
    this.sortProducts.emit(inputSort.value);
  }
}

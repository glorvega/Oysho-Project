import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: Product;
  @Input() cart: boolean = false;
  @Output() gotoDetail: EventEmitter<void> = new EventEmitter<void>();

  public navigateToDetail() {
    this.gotoDetail.emit();
  }
}

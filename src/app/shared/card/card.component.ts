import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  /* crear la variable product que luego se le pasará por parámetro al callback en la card */
  @Input() callbackFunction!: (args: any) => void;

  constructor() {}

  ngOnInit(): void {}
}

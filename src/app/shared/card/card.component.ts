import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  @Input() callbackFunction!: (args: any) => void;

  constructor() {}

  ngOnInit(): void {}
}

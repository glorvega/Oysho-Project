import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  //@Input() product!: ProductInterface;
  /* crear la variable product que luego se le pasará por parámetro al callback en la card */
  @Input() callbackFunction!: (args: any) => void;

  constructor() {}

  ngOnInit(): void {}
}

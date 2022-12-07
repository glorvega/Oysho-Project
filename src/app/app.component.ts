import { Component, Input } from '@angular/core';
import { Category } from './core/services/products/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './styles/_reset.scss'],
})
export class AppComponent {
  title = 'OyshoProject';
  @Input() category!: Category;
}

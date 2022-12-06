import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
@NgModule({
  declarations: [CardComponent, ProductFilterPipe],
  imports: [CommonModule],
  exports: [CardComponent, ProductFilterPipe],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { ProductSortingComponent } from './components/product-sorting/product-sorting.component';
@NgModule({
  declarations: [
    CardComponent,
    ProductFilterPipe,
    FooterLinksComponent,
    ProductSortingComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    ProductFilterPipe,
    FooterLinksComponent,
    ProductSortingComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { ProductSortingComponent } from './components/product-sorting/product-sorting.component';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
@NgModule({
  declarations: [
    CardComponent,
    ProductFilterPipe,
    FooterLinksComponent,
    ProductSortingComponent,
    InputFilterComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    ProductFilterPipe,
    FooterLinksComponent,
    ProductSortingComponent,
    InputFilterComponent,
  ],
})
export class SharedModule {}

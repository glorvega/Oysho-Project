import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
@NgModule({
  declarations: [CardComponent, ProductFilterPipe, FooterLinksComponent],
  imports: [CommonModule],
  exports: [CardComponent, ProductFilterPipe, FooterLinksComponent],
})
export class SharedModule {}

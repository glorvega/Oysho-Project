import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [DetailComponent, ListComponent],
  exports: [DetailComponent, ListComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

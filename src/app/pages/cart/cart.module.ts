import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}

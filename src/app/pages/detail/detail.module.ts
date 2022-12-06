import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule, NgbCarouselModule],
})
export class DetailModule {}

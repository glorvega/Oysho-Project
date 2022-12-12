import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [],
  exports: [NavbarComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class CoreModule {}

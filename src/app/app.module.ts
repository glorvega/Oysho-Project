import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeModule } from './pages/home/home.module';
import { ProductModule } from './pages/product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    ProductModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

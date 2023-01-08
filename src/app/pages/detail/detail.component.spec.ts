import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';
import { ProductService } from 'src/app/core/services/products/product.service';
import * as cartActions from 'src/app/store/actions/cart.actions';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let router: Router;
  let route: ActivatedRoute;
  let productDetailsService: ProductService;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
    }).compileComponents();

    route = new ActivatedRoute();
    component = new DetailComponent(
      router,
      route,
      productDetailsService,
      store
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the product details when ngOnInit is called', () => {
    const getDetailsSpy = jest.spyOn(productDetailsService, 'getDetails');
    component.catdId = '123';
    component.prodId = '456';
    component.ngOnInit();
    expect(getDetailsSpy).toHaveBeenCalledWith('123', '456');
  });

  it('should navigate to the previous route when goBack is called', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.goBack();
    expect(navigateSpy).toHaveBeenCalledWith(['list', component.catdId]);
  });

  it('should dispatch the addProduct action when addToCart is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const product: CartProduct = {
      id: 123,
      name: 'Product',
      nameEn: 'ProductEn',
      image: ['image.jpg', 'image2.jpg'],
      longDescription: 'desciption of product',
      prices: ['19,99', '19,99'],
    };
    component.addToCart(product);
    expect(dispatchSpy).toHaveBeenCalledWith(
      cartActions.addProduct({ product: product })
    );
  });
});

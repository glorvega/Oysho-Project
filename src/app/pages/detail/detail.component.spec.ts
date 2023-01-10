import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgZone,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { AppState } from '../../../../src/app/app.reducer';
import { CartProduct } from '../../../../src/app/core/services/cart/cart.interface';
import { ApiProductService } from '../../../../src/app/core/services/products/api/api-product.service';
import { Product } from '../../../../src/app/core/services/products/interfaces/product.interface';
import { ProductService } from '../../../../src/app/core/services/products/product.service';
import * as cartActions from '../../../../src/app/store/actions/cart.actions';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let router: Router;
  let service: ProductService;
  let store: Store<AppState>;
  let ngZone: NgZone;

  let mockedProduct: Product = {
    id: 3,
    name: 'prod1',
    nameEn: 'prodEn1',
    image: ['image1.jpg', 'image2.jpg'],
    longDescription: 'description',
    prices: ['19,99', '19,99'],
  };

  const productServiceMock = {
    getProductsDetails: () => of(mockedProduct),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      providers: [
        RouterModule,
        {
          provide: ProductService,
          useValue: productServiceMock,
        },
        ApiProductService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(DetailComponent);
    router = TestBed.inject(Router);
    service = TestBed.inject(ProductService);
    store = TestBed.inject(Store);
    ngZone = TestBed.inject(NgZone);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductDetail when catdId and prodId are defined', () => {
    component.getProductDetail = jest.fn();
    component.catdId = '123';
    component.prodId = '456';
    component.ngOnInit();
    expect(component.getProductDetail).toHaveBeenCalled();
  });

  it('should navigate to the previous route when goBack is called', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.catdId = '123';
    component.goBack();
    expect(navigateSpy).toHaveBeenCalledWith(['list', component.catdId]);
  });

  it('should dispatch the addProduct action when addToCart is called and navigate to the cart', () => {
    jest.useFakeTimers();
    const dispatchSpy = jest
      .spyOn(store, 'dispatch')
      .mockImplementation(() => of(mockedProduct));
    const navigateSpy = jest.spyOn(router, 'navigate');
    const swalSpy = jest.spyOn(Swal, 'fire');

    const timerSpy = jest.spyOn(global, 'setTimeout');
    ngZone.run(() => {
      component.addToCart(mockedProduct);
    });

    expect(dispatchSpy).toHaveBeenCalledWith(
      cartActions.addProduct({ product: mockedProduct })
    );

    expect(swalSpy).toHaveBeenCalled();
    expect(timerSpy).toHaveBeenLastCalledWith(expect.any(Function), 1500);
    expect(navigateSpy).toHaveBeenCalled;
  });
});

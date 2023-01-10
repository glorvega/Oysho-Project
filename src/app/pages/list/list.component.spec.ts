import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  Router,
  RouterModule,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductFilterPipe } from '../../../../src/app/shared/pipes/product-filter.pipe';
import { AppState } from '../../../../src/app/app.reducer';
import { ApiProductService } from '../../../../src/app/core/services/products/api/api-product.service';
import { Product } from '../../../../src/app/core/services/products/interfaces/product.interface';
import { ProductService } from '../../../../src/app/core/services/products/product.service';
import * as cartActions from '../../../../src/app/store/actions/cart.actions';
import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let router: Router;
  let service: ProductService;
  let store: Store<AppState>;
  let activatedRoute: ActivatedRoute;

  let mockedProduct: CartProduct = {
    id: 0,
    name: 'prod1',
    nameEn: 'prodEn1',
    image: ['image1.jpg', 'image2.jpg'],
    longDescription: 'description',
    prices: ['19,99', '19,99'],
  };

  let mockedProducts = [
    {
      id: 1,
      name: 'prod1',
      nameEn: 'prodEn1',
      image: ['image1.jpg', 'image2.jpg'],
      longDescription: 'description',
      prices: ['19,99', '19,99'],
    },
    {
      id: 2,
      name: 'prod2',
      nameEn: 'prodEn1',
      image: ['image1.jpg', 'image2.jpg'],
      longDescription: 'description',
      prices: ['29,99', '29,99'],
    },
    {
      id: 3,
      name: 'prod3',
      nameEn: 'prodEn1',
      image: ['image1.jpg', 'image2.jpg'],
      longDescription: 'description',
      prices: ['39,99', '39,99'],
    },
  ];

  const productServiceMock = {
    getProductList: () => of(mockedProducts),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, ProductFilterPipe],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        RouterModule,
        ProductService,
        {
          provide: ProductService,
          useValue: productServiceMock,
        },
        ApiProductService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(ProductService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the product list once the component is initialized', () => {
    component.ngOnInit();
    const id = '123';
    const spy = jest
      .spyOn(service, 'getProductList')
      .mockReturnValue(of(mockedProducts));

    component.getProductList(id);

    expect(spy).toHaveBeenCalledWith(id);
    expect(component.productList).toEqual(mockedProducts);
  });
  it('should dispatch the addProduct action when addToCart is called and navigate to the cart', () => {
    const dispatchSpy = jest
      .spyOn(store, 'dispatch')
      .mockImplementation(() => of(mockedProduct));
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.addToCart(mockedProduct);
    expect(dispatchSpy).toHaveBeenCalledWith(
      cartActions.addProduct({ product: mockedProduct })
    );
    expect(navigateSpy).toHaveBeenCalled;
  });
  it('should sort products by name', () => {
    component.productList = mockedProducts;
    component.sort('Name');
    expect(component.productList[0].name).toBe('prod1');
    expect(component.productList[1].name).toBe('prod2');
    expect(component.productList[2].name).toBe('prod3');
  });

  it('should sort products by high price', () => {
    component.productList = mockedProducts;
    component.sort('High');
    expect(component.productList[0].prices[0]).toBe('19,99');
    expect(component.productList[1].prices[0]).toBe('29,99');
    expect(component.productList[2].prices[0]).toBe('39,99');
  });
  it('should sort products by low price', () => {
    component.productList = mockedProducts;
    component.sort('Low');
    expect(component.productList[0].prices[0]).toBe('19,99');
    expect(component.productList[1].prices[0]).toBe('29,99');
    expect(component.productList[2].prices[0]).toBe('39,99');
  });
});

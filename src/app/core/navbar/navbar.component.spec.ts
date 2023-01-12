import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgZone,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiProductService } from '../services/products/api/api-product.service';
import { ApiCategory } from '../services/products/interfaces/api-product.interface';
import { ProductService } from '../services/products/product.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let service: ProductService;
  let apiservice: ApiProductService;
  let ngZone: NgZone;
  /*   let routes: Routes = [
    {
      path: 'home',
      loadChildren: () =>
        import('../../pages/home/home.module').then((m) => m.HomeModule),
    },
  ]; */

  const categoriesList: ApiCategory = {
    categories: [
      {
        id: 1,
        name: 'cat1',
        nameEn: 'catEn1',
        shortDescription: null,
        description: null,
        keywords: null,
        key: 'cat',
        numberOfProducts: 2,
        type: 'type1',
        viewCategoryId: 1,
        subcategories: ['subcat1', 'subcat2'],
        attachments: ['att1', 'att2'],
        sequence: 1,
        oldIds: ['old1', 'old2'],
      },
      {
        id: 2,
        name: 'cat2',
        nameEn: 'catEn2',
        shortDescription: null,
        description: null,
        keywords: null,
        key: 'cat2',
        numberOfProducts: 2,
        type: 'type2',
        viewCategoryId: 2,
        subcategories: ['subcat1', 'subcat2'],
        attachments: ['att1', 'att2'],
        sequence: 2,
        oldIds: ['old1', 'old2'],
      },
    ],
  };

  const productServiceMock = {
    getCategory: () => of(categoriesList),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule],
      providers: [
        RouterModule,
        /* RouterTestingModule.withRoutes(routes), */

        {
          provide: ApiProductService,
          useValue: productServiceMock,
        },
        ProductService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    router = TestBed.inject(Router);
    service = TestBed.inject(ProductService);
    apiservice = TestBed.inject(ApiProductService);
    ngZone = TestBed.inject(NgZone);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the homepage', () => {
    let navigateSpy = jest.spyOn(router, 'navigate');
    ngZone.run(() => {
      component.gotoHomepage();
    });
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
  it('should navigate to the list', () => {
    let navigateSpy = jest.spyOn(router, 'navigate');
    ngZone.run(() => {
      component.gotoList(1010392502);
    });
    expect(navigateSpy).toHaveBeenCalledWith(['list', '1010392502']);
  });
  it('should navigate to the cart', () => {
    let navigateSpy = jest.spyOn(router, 'navigate');
    ngZone.run(() => {
      component.goToCart();
    });
    expect(navigateSpy).toHaveBeenCalled;
  });
  it('should render all categories', () => {
    component.getCategories();

    expect(component.allCategories.length).toBe(2);
    expect(component.allCategories.length).toEqual(
      categoriesList.categories.length
    );
  });
});

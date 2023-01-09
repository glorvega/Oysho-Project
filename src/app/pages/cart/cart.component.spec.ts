import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';
import {
  loadCartProducts,
  removeProductByIndex,
} from '../../../../src/app/store/actions/cart.actions';
import { AppState } from 'src/app/app.reducer';
import { StateObservable, Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../../../../src/app/store/reducers';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ cart: cartReducer }),
      ],
      declarations: [CartComponent],
    }).compileComponents();

    //store = new Store<AppState>(StateObservable, 2, 3);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    jest.spyOn(store, 'dispatch').mockImplementation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch the loadCartProducts action when ngOnInit is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadCartProducts());
  });

  it('should dispatch the removeProductByIndex action when deleteProduct is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.deleteProduct(0);
    expect(dispatchSpy).toHaveBeenCalledWith(
      removeProductByIndex({ productIndex: 0 })
    );
  });
});

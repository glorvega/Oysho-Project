import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/products/product.service';
import Swal from 'sweetalert2';
import { addProduct } from 'src/app/store/actions/cart.actions';
import { CartState } from 'src/app/store/states/cart.state';
import { AppState } from 'src/app/app.reducer';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  catdId: string | null = '';
  prodId: string | null = '';
  cartProducts: Product[] = [];
  error: any;
  loading!: boolean;
  cart: boolean = true;
  product!: Product;
  public productDetails!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productDetailsService: ProductService,
    private store: Store<AppState>,
    private cartService: CartService
  ) {
    this.catdId = this.route.snapshot.paramMap.get('catId');
    this.prodId = this.route.snapshot.paramMap.get('prodId');
  }

  ngOnInit(): void {
    if (this.catdId && this.prodId) {
      this.getProductDetail(this.catdId, this.prodId);
    }

    this.store.select('cart').subscribe((state: CartState) => {
      console.log(state.products);
      console.log(state.error);
      console.log(state.loading);
      if (state.products) {
        this.cartProducts = state.products;
        this.error = state.error;
        this.loading = state.loading;
      } else {
        return;
      }
    });
  }

  getProductDetail(catId: string, prodId: string) {
    this.productDetailsService.getDetails(catId, prodId).subscribe({
      next: (result) => {
        this.productDetails = result;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  goBack() {
    this.router.navigate(['list', this.catdId]);
  }

  addToCart(product: CartProduct) {
    //this.store.dispatch(addProduct({ product: product }));
    this.cartService.addProduct(product);
    Swal.fire(
      'Producto añadido con éxito',
      'Redireccionando a tu cesta...',
      'success'
    );
    setTimeout(() => {
      this.router.navigate(['cart']);
    }, 2000);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../../../../src/app/core/services/products/interfaces/product.interface';
import { ProductService } from '../../../../src/app/core/services/products/product.service';
import Swal from 'sweetalert2';
import * as cartActions from '../../../../src/app/store/actions/cart.actions';
import { AppState } from '../../../../src/app/app.reducer';
import { CartProduct } from '../../../../src/app/core/services/cart/cart.interface';

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
    private store: Store<AppState>
  ) {
    this.catdId = this.route.snapshot.paramMap.get('catId');
    this.prodId = this.route.snapshot.paramMap.get('prodId');
  }

  ngOnInit(): void {
    if (this.catdId && this.prodId) {
      this.getProductDetail(this.catdId, this.prodId);
    }
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
    console.log(cartActions.addProduct({ product: product }));
    this.store.dispatch(cartActions.addProduct({ product: product }));
    Swal.fire(
      'Producto añadido con éxito',
      'Redireccionando a tu cesta...',
      'success'
    );
    setTimeout(() => {
      this.router.navigate(['cart']);
    }, 1500);
  }
}

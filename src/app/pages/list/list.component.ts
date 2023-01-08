import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';
import { CartService } from 'src/app/core/services/cart/cart.service';
import * as cartActions from 'src/app/store/actions/cart.actions';
import {
  Category,
  Product,
} from 'src/app/core/services/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public productList: Product[] = [];
  public inputSearch: string = '';
  public id: string | null = '';

  constructor(
    private router: Router,
    private productListService: ProductService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('catId');
      if (this.id) {
        this.getProductList(this.id);
      }
    });
  }

  getProductList(id: string) {
    this.productListService.getProductList(id).subscribe({
      next: (result) => {
        this.productList = result;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  sort(inputValue: string) {
    switch (inputValue) {
      case 'High': {
        this.productList = this.productList.sort(function (a: any, b: any) {
          return b.prices[0] - a.prices[0];
        });
        break;
      }
      case 'Low': {
        this.productList = this.productList.sort(function (a: any, b: any) {
          return a.prices[0] - b.prices[0];
        });
        break;
      }
      case 'Name': {
        this.productList = this.productList.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }
    }
    return this.productList;
  }

  public gotoDetails = (product: Product) => {
    this.router.navigate(['list', this.id, 'detail', product.id.toString()]);
  };

  addToCart(product: CartProduct) {
    this.store.dispatch(cartActions.addProduct({ product: product }));
    //this.cartService.addProduct(product);
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

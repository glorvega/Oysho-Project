import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/products/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  catdId: string | null = '';
  prodId: string | null = '';
  public productDetails!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productDetailsService: ProductService,
    private cartService: CartService
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

  addToCart(productDetails: Product) {
    /* localStorage.setItem('producto', JSON.stringify(productDetails));
    console.log('producto añadido'); */
    this.cartService.addProduct(productDetails);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import { ApiProductService } from 'src/app/core/services/products/services/api/api-product.service';
import { ProductService } from 'src/app/core/services/products/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public productList: Product[] = [];
  public inputSearch: string = '';
  id: string | null = '';
  public page = 1;
  public pageSize = 10;

  constructor(
    private router: Router,
    private productListService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('catId');
      if (this.id) {
        this.getProductList(this.id);
      }
    });
  }

  public gotoDetails = (product: Product) => {
    this.router.navigate(['list', this.id, 'detail', product.id.toString()]);
  };

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
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Category,
  Product,
} from 'src/app/core/services/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/products/product.service';

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

  sort(event: any) {
    switch (event.target.value) {
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

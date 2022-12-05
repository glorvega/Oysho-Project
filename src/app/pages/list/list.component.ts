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
  //Importar el input filter de pipes y la interface de details
  public productList: Product[] = [];
  public inputSearch: string = '';
  id: string | null = '';

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

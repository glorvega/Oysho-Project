import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import { ApiProductService } from 'src/app/core/services/products/services/api/api-product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //Importar el input filter de pipes y la interface de details
  public productList: Product[] = [];
  public inputSearch: string = '';

  constructor(
    private router: Router,
    private productListService: ApiProductService
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  gotoDetail() {
    console.log('click');
    this.router.navigate(['detail']);
  }

  /*   goToDetails = (game: VideogamesInterface) => {
    console.log(game);
    this.router.navigate(['details', game.appId]);
  }; */

  getProductList() {
    this.productListService.getProductList('1010601166').subscribe({
      next: (result) => {
        const productListArray: Product[] = [];
        result.products.forEach((prod) => {
          productListArray.push({
            id: prod.id,
            name: prod.name,
            nameEn: prod.nameEn,
            image: prod.image,
          });
        });
        this.productList = productListArray;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

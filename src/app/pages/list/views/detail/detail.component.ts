import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import { ApiProductService } from 'src/app/core/services/products/services/api/api-product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  catdId: string | null = '';
  prodId: string | null = '';
  productDetails!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ApiProductService
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
    this.service.getProductsDetails(catId, prodId).subscribe({
      next: (result) => {
        this.productDetails = {
          id: result.id,
          name: result.name,
          nameEn: result.nameEn,
          image: this.service.getImagesPerProduct(result),
          longDescription:
            result.bundleProductSummaries[0]?.detail?.longDescription,
          prices: this.service.getPrices(result),
        };
        console.log(this.productDetails);
      },
    });
  }

  goBack() {
    this.router.navigate(['list', this.catdId]);
  }
}

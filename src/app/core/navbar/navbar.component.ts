import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/core/services/products/interfaces/product.interface';
import { ApiProductService } from '../services/products/services/api/api-product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  closeResult = '';
  allCategories: Category[] = [];
  constructor(
    private offcanvasService: NgbOffcanvas,
    private categoryService: ApiProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  open(content: unknown) {
    this.offcanvasService.open(content).result;
  }

  gotoHomepage() {
    this.router.navigate(['home']);
  }

  gotoList() {
    this.router.navigate(['list']);
  }

  getCategories() {
    this.categoryService.getCategory().subscribe({
      next: (result) => {
        const categoriesArray: Category[] = [];
        result.categories.forEach((cat) => {
          categoriesArray.push({
            id: cat.id,
            name: cat.name,
            nameEn: cat.nameEn,
            description: cat.description,
          });
        });
        this.allCategories = categoriesArray;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

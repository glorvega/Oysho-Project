import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/pages/product/interface/product.interface';
import { ApiProductService } from '../services/products/services/api-product.service';

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

  getCategories() {
    this.categoryService.getCategory().subscribe({
      next: (result) => {
        const categoriesArray: Category[] = [];
        result.categories.forEach((videogame) => {
          categoriesArray.push({
            id: videogame.id,
            name: videogame.name,
            nameEn: videogame.nameEn,
            description: videogame.description,
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

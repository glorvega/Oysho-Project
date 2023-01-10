import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/core/services/products/interfaces/product.interface';
import { ProductService } from '../services/products/product.service';

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
    private categoryService: ProductService,
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

  goToCart() {
    this.router.navigate(['cart']);
  }

  gotoList(id: number) {
    this.router.navigate(['list', id.toString()]);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.allCategories = result.splice(0, 20);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

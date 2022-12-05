import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoList() {
    this.router.navigate(['list/1010601166']);
  }

  gotoShop() {
    this.router.navigate(['list/1010259541']);
  }

  gotoNewArrivals() {
    this.router.navigate(['list/1469017']);
  }
}

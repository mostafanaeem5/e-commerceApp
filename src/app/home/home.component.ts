import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
    });
  }
}

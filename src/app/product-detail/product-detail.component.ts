import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  pageTitle = "Product Detail";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.getProduct(id);
      }
  }

  getProduct(id: string): void {
      this.productService.getProduct(id).subscribe( product => {
      this.product = product});
  }

}

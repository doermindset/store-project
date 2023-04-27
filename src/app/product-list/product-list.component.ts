import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from './product';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

    pageTitle = 'Products Page'
    displayedColumns: string[] = ['imageUrl', 'id', 'name', 'price', 'available', 'rating'];
    dataSource!:any;
    errorMessage = "";
    sub! :Subscription;
    products !: IProduct[];
    addTable: boolean = false;
    remTable: boolean = false;
    newProductId!: string
    newStudentAlter!: any;
    newProductPrice!: number;
    newProductRating!: number;
    newProductImgUrl!: string;
    newProductName!: string;
    remId!: string;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe( products => { 
        this.products = products;
        this.dataSource = new MatTableDataSource(products);
        }
      );
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    changeAddTable(): void {
      this.addTable ? this.addTable = false : this.addTable = true;
    }

    changeRemoveTable(): void {
      this.remTable ? this.remTable = false : this.remTable = true;
    }

    addProduct(){
      let newProduct: IProduct = {id: this.newProductId, name: this.newProductName, imageUrl: this.newProductImgUrl, price: Number(this.newProductPrice), available: true, rating: Number(this.newProductRating)};
      this.productService.addProduct(newProduct);
      this.changeAddTable()
    }


}

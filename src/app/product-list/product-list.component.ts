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

    // @ViewChild(MatTable) table: MatTable<IProduct> | undefined;

    // addData() {
    //   const randomElementIndex = Math.floor(Math.random() * this.products.length);
    //   this.dataSource.push(this.products[randomElementIndex]);
    //   this.table?.renderRows();
    // }
  
    // removeData() {
    //   this.dataSource.pop();
    //   this.table?.renderRows();
    // }


}

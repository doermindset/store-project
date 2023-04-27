import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { IProduct } from '../product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
    constructor(private fs : Firestore) { }

    getProducts(): Observable<IProduct[]>{
      
      const myCollection: any = collection(this.fs, 'products');
      return collectionData(myCollection);
    }

    getProduct(id: string): Observable<IProduct | undefined> {
      return this.getProducts()
        .pipe(
          map((products: IProduct[]) => products.find(p => p.id === id))
        );
    }

    addProducts(product:IProduct) {
      const myCollection = collection(this.fs, 'products');
      addDoc(myCollection, product);
    }
}

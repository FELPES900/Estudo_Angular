import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "http://localhost:4200/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Faz a criação dos produtos
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}

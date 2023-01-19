import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Product, ProductContainer } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8081/rest/faturamento/cliente/tipo/visualizar"

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

  // Method para ler as informações do Backend
  read(): Observable<ProductContainer> {
    // Ira retorna a lista de produtos
    return this.http.get<ProductContainer>(this.baseUrl)
  }
}

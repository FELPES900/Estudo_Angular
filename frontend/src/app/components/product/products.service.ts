import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Product, ProductContainer } from './product.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrlGet = "http://localhost:8081/rest/faturamento/cliente/tipo/visualizar";
  baseUrlPost = "http://localhost:8081/rest/faturamneto/produtos/create";
  baseUrlPathc = "http://localhost:8081/rest/faturamneto/produtos/edit"
  baseUrlDelete = "http://localhost:8081/rest/faturamento/produtos/delete"

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
    type NewType = Product;

    return this.http.post<NewType>(this.baseUrlPost, product)
  }

  update(product: Product): Observable<Product> {
    type NewType = Product;

    return this.http.patch<NewType>(this.baseUrlPathc, product)
  }

  // Method para ler as informações do Backend
  read(): Observable<ProductContainer> {
    // Ira retorna a lista de produtos
    return this.http.get<ProductContainer>(this.baseUrlGet)
  }

  delet(product: Product): boolean {
    // type NewType = Product

    try {
      this.http.delete(this.baseUrlDelete, {
        body: { "B1_COD": product.B1_COD }
      })
      return true;
    } catch (error) {
      return false;
    }



  }

}

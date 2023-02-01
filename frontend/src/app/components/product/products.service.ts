import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Product, ProductContainer } from './product.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrlGet = "http://192.168.199.3:8081/rest/faturamento/cliente/tipo/visualizar";
  baseUrlPost = "http://192.168.199.3:8081/rest/faturamneto/produtos/create";
  baseUrlPathc = "http://192.168.199.3:8081/rest/faturamneto/produtos/edit"
  baseUrlDelete = "http://192.168.199.3:8081/rest/faturamento/produtos/delete"

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

  async delet(product: String): Promise<boolean> {
    let teste = false;
    await this.http.delete(this.baseUrlDelete, { body: { "B1_COD": product } }).toPromise().then(produto => {
      console.log(produto)
      teste = true;
    });
    return teste;
  }

}

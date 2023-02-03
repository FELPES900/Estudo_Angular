import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})


export class ProductReadComponent {

  // Variavel que recebera os dados do json do backend
  public products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.buscarProdutos()
  }

  async deletar(product: String): Promise<void> {
    await this.productService.delet(product);
    this.productService.showMenssagem("Product deletado");
    await this.buscarProdutos();
    let index = this.products.findIndex(p => p.B1_COD === product);
    this.products.splice(index,1)
  }
  async buscarProdutos(): Promise<void> {
    this.products = await this.productService.read().toPromise().then(response => response?.Produtos) || [];
    console.log(this.products);
  }
}

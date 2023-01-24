import { Component } from '@angular/core';
import { ProductService } from './../products.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  Product: Product = {
    B1_COD: "",
    B1_DESC: "",
    B1_TIPO: "",
    B1_UM: "",
    B1_LOCPAD: "",
    B1_GARANT: ""
  }

  constructor(private ProductService: ProductService, private router: Router) { }

  // Method de resposta após o produto ser criado
  create(): void {
    console.log(this.Product)
    // this.ProductService.create(this.Product).subscribe(() => {
    //   this.ProductService.showMenssagem("Produto criado com sucesso")
    //   this.router.navigate(['/products'])
    // })
  }

  // Cancela a criação do produto quando estiver na tela de criação
  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMenssagem("Requisição cancelada")
  }

}

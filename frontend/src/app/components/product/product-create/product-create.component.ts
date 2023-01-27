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

  product: Product = {
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
    if (this.product.B1_COD == "" || this.product.B1_DESC  == "" || this.product.B1_GARANT == "" || this.product.B1_LOCPAD == "" || this.product.B1_TIPO == "" || this.product.B1_UM == "" ) {
      // console.log("por favor preencha o campo codigo")
      this.ProductService.showMenssagem("Por favor preencha todos os campos obrigatorios")
    } else {
      // this.ProductService.showMenssagem("Tudpo OK")
      this.ProductService.create(this.product).subscribe(() => {
        this.ProductService.showMenssagem("Produto criado com sucesso")
        this.router.navigate(['/products'])
      })
    }
  }

  // Cancela a criação do produto quando estiver na tela de criação
  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMenssagem("Requisição cancelada")
  }

} 

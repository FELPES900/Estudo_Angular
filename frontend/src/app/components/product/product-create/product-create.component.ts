import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: "Produto de teste",
    price: 149.99
  }

  constructor(private ProductsService: ProductsService, private router: Router) { }
  
  // Method de resposta após o produto ser criado
  createProduct(): void {
    // Apos ter apertado em salva ai sim apresentara a messagem
    this.ProductsService.create(this.product).subscribe(() => {
      this.ProductsService.showMenssagem("Produto criando com sucesso")
      this.router.navigate(['/products'])
    })
  }

  // Cancela a criação do produto quando estiver na tela de criação
  cancel(): void {
    this.router.navigate(['/products'])
  }

}

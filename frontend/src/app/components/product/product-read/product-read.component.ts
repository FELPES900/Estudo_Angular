import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';
@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})


export class ProductReadComponent {

    // Variavel que recebera os dados do json do backend
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.productService.read().subscribe(P => {
      this.products = P.Produtos
      console.log(P)
    })
  }
  
}

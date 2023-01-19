import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';



export interface Products {

  id: string;
  name: string;

}


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})


export class ProductReadComponent {

    // Variavel que recebera os dados do json do backend
  products!: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit(): void{
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  
}

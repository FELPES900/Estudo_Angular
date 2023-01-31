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

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void{
    this.productService.read().subscribe(P => {
      this.products = P.Produtos
      console.log(P)
    })
  }
  
  async deletar(product: Product): Promise<void>{
    const result =  this.productService.delet(product)

    if(result){
      console.log("exclui")
    }
    console.log(product)
    // this.productService.delet(this.product).subscribe(() => {
      // this.productService.showMenssagem("Produto criado com sucesso")
      // this.router.navigate(['/products'])
  }

}

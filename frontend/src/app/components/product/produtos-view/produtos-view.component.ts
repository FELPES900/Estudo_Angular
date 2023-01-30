import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../products.service';
@Component({
  selector: 'app-produtos-view',
  templateUrl: './produtos-view.component.html',
  styleUrls: ['./produtos-view.component.css']
})
export class ProdutosViewComponent {

    // Variavel que recebera os dados do json do backend
    public product: Product = {
      B1_COD: "",
      B1_DESC: "",
      B1_GARANT: "",
      B1_LOCPAD: "",
      B1_TIPO: "",
      B1_UM: ""
    };

    constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      const B1_COD = this.route.snapshot.paramMap.get("B1_COD");
      this.ProductService.read().subscribe(P => {
        P.Produtos.map(produto => {
          if(produto.B1_COD == B1_COD){
            this.product = produto;
          }
        })
      });
    }

    retornar(): void {
      this.router.navigate(['/products'])
      this.ProductService.showMenssagem("Retornado com sucesso")
    }
  

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent {

  public product: Product = {
    B1_COD: "",
    B1_DESC: "",
    B1_GARANT: "",
    B1_LOCPAD: "",
    B1_TIPO: "",
    B1_UM: ""
  };

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute) { }

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

  update(): void {
    if(this.product.B1_DESC  == "" || this.product.B1_GARANT == "" || this.product.B1_LOCPAD == "" || this.product.B1_TIPO == "" || this.product.B1_UM == ""){
      this.ProductService.showMenssagem("Os campos que sao editavel nao podem estar vazio")
    }else{
      this.ProductService.update(this.product).subscribe(() => {
        this.ProductService.showMenssagem("Produto criado com sucesso")
        this.router.navigate(['/products'])
      })
    }
    console.log(this.product)
  }

  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMenssagem("Requisição cancelada")
  }

}

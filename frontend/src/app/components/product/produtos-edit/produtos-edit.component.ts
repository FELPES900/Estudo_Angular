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

  public product: Product[] = [];

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{
    const B1_COD = this.route.snapshot.paramMap.get("B1_COD");
    this.ProductService.readById('B1_COD').subscribe(P => {
      this.product = P
      console.log(P)
    });
  }

  update(): void {

  }

  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMenssagem("Requisição cancelada")
  }

}

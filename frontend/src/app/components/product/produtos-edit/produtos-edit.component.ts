import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent {
  
  constructor(private ProductService: ProductService, private router: Router) { }

  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMenssagem("Requisição cancelada")
  }

}

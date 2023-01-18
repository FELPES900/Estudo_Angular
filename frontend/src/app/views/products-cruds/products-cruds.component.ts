import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-products-cruds',
  templateUrl: './products-cruds.component.html',
  styleUrls: ['./products-cruds.component.css']
})
export class ProductsCrudsComponent {

  constructor(private router: Router) { }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}

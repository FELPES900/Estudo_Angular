import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando as views de Home e Products
import { HomeComponent } from "./views/home/home.component"
import { ProductsCrudsComponent } from "./views/products-cruds/products-cruds.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsCrudsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

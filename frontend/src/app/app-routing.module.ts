import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando as views de Home e Products
import { HomeComponent } from "./views/home/home.component"
import { ProductsCrudsComponent } from "./views/products-cruds/products-cruds.component"
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProdutosEditComponent } from './components/product/produtos-edit/produtos-edit.component';
import { ProdutosViewComponent } from './components/product/produtos-view/produtos-view.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsCrudsComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/edit/:B1_COD",
    component: ProdutosEditComponent
  },
  {
    path: "products/visualizar/:B1_COD",
    component: ProdutosViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

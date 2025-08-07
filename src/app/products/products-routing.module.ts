import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


const routes: Routes = [
  { path: 'category/:name', component: ProductListComponent },
  { path: '', component: ProductListComponent }, 
  { path: ':id', component: ProductDetailComponent },
  { path: 'categories', component: CategoryListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

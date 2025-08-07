import { Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { CategoryListComponent } from './products/components/category-list/category-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:name', component: ProductListComponent } 
];

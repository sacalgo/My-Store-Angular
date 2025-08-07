import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-category-list',
   styleUrls: ['./category-list.component.scss'], 
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  categories: string[] = [];
  error = '';
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load categories.';
        this.loading = false;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  pagedProducts: Product[] = [];
  searchQuery: string = '';

  loading = true;
  error = '';
  pageSize = 4;
  currentPage = 0;
  categoryName: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = null;
      this.categoryName = params.get('name');

      if (!this.categoryName && this.route.snapshot.url.some(seg => seg.path === 'category')) {
        this.error = 'Invalid category!';
        this.products = [];
        this.loading = false;
        return;
      }

      this.loading = true;
      this.error = '';
      const storedQuery = localStorage.getItem('productSearch') || '';
      this.searchQuery = storedQuery;

      const productObs = this.categoryName
        ? this.productService.getProductsByCategory(this.categoryName)
        : this.productService.getAllProducts();

      productObs.subscribe({
        next: res => {
          this.products = res;
          this.currentPage = 0;
          this.setPagedProducts();
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load products.';
          this.loading = false;
        }
      });
    });

    // Listen to search change
    window.addEventListener('storage', () => {
      this.searchQuery = localStorage.getItem('productSearch') || '';
      this.setPagedProducts();
    });
  }

  setPagedProducts(): void {
    let filtered = this.products;

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = this.products.filter(p => p.title.toLowerCase().includes(query));
    }

    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = filtered.slice(start, end);
  }

  changePage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.setPagedProducts();
  }
}

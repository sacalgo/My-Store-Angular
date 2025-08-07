import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-product-detail', 
  styleUrls:['./product-detail.component.scss'],
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  error = '';
  loading = true;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load product details.';
        this.loading = false;
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

const API = environment.apiBaseUrl;

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API}/products/${id}`);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${API}/products/categories`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${API}/products/category/${category}`);
  }
}

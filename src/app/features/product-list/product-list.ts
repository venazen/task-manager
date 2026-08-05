import { Component, inject, input } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productService = inject(ProductService);
  protected readonly input = input;
}

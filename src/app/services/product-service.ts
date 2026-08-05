import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSignal = signal<Product[]>([
    { id: 1, price: 40, name: 'keyboard', inStock: true, category: 'electronics' },
    { id: 2, price: 50, name: 'mouse', inStock: false, category: 'electronics' },
    { id: 3, price: 60, name: 'jacket', inStock: true, category: 'clothing' },
    { id: 4, price: 70, name: 'hat', inStock: true, category: 'clothing' },
    { id: 5, price: 90, name: 'steak', inStock: false, category: 'food' },
    { id: 6, price: 90, name: 'bread', inStock: true, category: 'food' },
  ]);

  products = this.productsSignal.asReadonly();

  private selectedCategorySignal = signal<'all' | 'electronics' | 'clothing' | 'food'>('all');
  selectedCategory = this.selectedCategorySignal.asReadonly();
  private searchTermSignal = signal<string>('');
  searchTerm = this.searchTermSignal.asReadonly();
  private sortDirectionSignal = signal<'asc'|'desc'|null>(null);
  sortDirection = this.sortDirectionSignal.asReadonly();

  filtredProducts = computed(() => {
    const category = this.selectedCategorySignal();
    const products = this.productsSignal();
    const name = this.searchTermSignal();
    const sortDIrection = this.sortDirectionSignal();

    return  products.filter(
      (product) =>
        (category === 'all' || product.category === category) &&
        (name === '' || product.name.includes(name)),
    ).sort((a,b)=>sortDIrection==='asc'? a.price-b.price : b.price -a.price);
 });

  setCategory(category: 'all' | 'electronics' | 'clothing' | 'food'): void {
    this.selectedCategorySignal.set(category);
  }

  setSearchTerm(term: string): void {
    this.searchTermSignal.set(term);
  }

  setSortDirection(direction: 'asc' | 'desc' | null): void{
    this.sortDirectionSignal.set(direction);
  }
}

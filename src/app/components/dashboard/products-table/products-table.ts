import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Active' | 'Low Stock' | 'Out of Stock';
  image: string;
}

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.html',
  styleUrls: ['./products-table.css']
})
export class ProductsTableComponent implements OnInit {
  Math = Math;
  products: Product[] = [];
  paginatedProducts: Product[] = [];

  currentPage = 1;
  pageSize = 5;
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];

  sortKey: keyof Product = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    const categories = ['Electronics', 'Home & Kitchen', 'Fashion', 'Beauty', 'Sports'];
    const names = ['Smartphone X', 'Mechanical Keyboard', 'Leather Jacket', 'Yoga Mat', 'Air Purifier', 'Wireless Buds', 'Coffee Maker', 'Electric Toothbrush', 'Smart Bulb', 'Gaming Mouse'];

    for (let i = 1; i <= 25; i++) {
      const price = Math.floor(Math.random() * 500) + 50;
      const stock = Math.floor(Math.random() * 100);
      this.products.push({
        id: i,
        name: `${names[i % names.length]} - Mod ${i}`,
        category: categories[i % categories.length],
        price: price,
        stock: stock,
        status: stock > 20 ? 'Active' : (stock > 0 ? 'Low Stock' : 'Out of Stock'),
        image: `https://picsum.photos/seed/${i}/150/150`
      });
    }

    this.totalItems = this.products.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.updatePagination();
  }

  sort(key: keyof Product) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }

    this.products.sort((a, b) => {
      const valA = a[this.sortKey];
      const valB = b[this.sortKey];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortDirection === 'asc' ? valA - valB : valB - valA;
      }
      return 0;
    });

    this.updatePagination();
  }

  setPage(page: number, event: Event) {
    event.preventDefault();
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.slice(start, end);
  }
}

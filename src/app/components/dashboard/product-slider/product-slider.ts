import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

interface Product {
  id: string;
  name: string;
  price: string;
  sales: number;
  image: string;
}

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-slider.html',
  styleUrls: ['./product-slider.css']
})
export class ProductSliderComponent implements OnInit {
  products: Product[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 2 },
      940: { items: 3 }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

  ngOnInit(): void {
    this.products = [
      { id: '1', name: 'Premium Leather Watch', price: '$299', sales: 124, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
      { id: '2', name: 'Noise Cancelling Headphones', price: '$199', sales: 85, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
      { id: '3', name: 'Smart Fitness Tracker', price: '$149', sales: 210, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
      { id: '4', name: 'Wireless Charging Pad', price: '$49', sales: 450, image: 'https://images.unsplash.com/photo-1583394838336-acd37a7a270a?w=500&q=80' },
      { id: '5', name: 'Ergonomic Office Chair', price: '$399', sales: 62, image: 'https://images.unsplash.com/photo-1580480055273-228ff538c3b4?w=500&q=80' },
      { id: '6', name: 'Mechanical Keyboard RGB', price: '$129', sales: 134, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80' }
    ];
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-cards.html',
  styleUrls: ['./stat-cards.css']
})
export class StatCardsComponent {
  Math = Math;
  stats = [
    {
      label: 'Total Revenue',
      value: '$24,560',
      growth: 12.5,
      icon: 'bi-currency-dollar',
      iconColor: '#3b82f6',
      iconBg: 'rgba(59, 130, 246, 0.1)'
    },
    {
      label: 'Total Orders',
      value: '1,240',
      growth: 8.2,
      icon: 'bi-cart-check',
      iconColor: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      label: 'Current Profit',
      value: '$8,240',
      growth: -2.4,
      icon: 'bi-graph-up-arrow',
      iconColor: '#f59e0b',
      iconBg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      label: 'Customer Growth',
      value: '15.4%',
      growth: 4.6,
      icon: 'bi-people',
      iconColor: '#ef4444',
      iconBg: 'rgba(239, 68, 68, 0.1)'
    }
  ];
}

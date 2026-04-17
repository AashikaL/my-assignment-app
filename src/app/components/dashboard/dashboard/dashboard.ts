import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardsComponent } from '../stat-cards/stat-cards';
import { ChartsComponent } from '../charts/charts';
import { CustomerReviewsComponent } from '../customer-reviews/customer-reviews';
import { TasksComponent } from '../tasks/tasks';
import { ProductSliderComponent } from '../product-slider/product-slider';
import { ProductsTableComponent } from '../products-table/products-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatCardsComponent,
    ChartsComponent,
    CustomerReviewsComponent,
    TasksComponent,
    ProductSliderComponent,
    ProductsTableComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {}

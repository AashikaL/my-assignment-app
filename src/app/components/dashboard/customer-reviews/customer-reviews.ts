import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  name: string;
  time: string;
  rating: number;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-reviews.html',
  styleUrls: ['./customer-reviews.css']
})
export class CustomerReviewsComponent implements OnInit {
  reviews: Review[] = [];

  ngOnInit(): void {
    const names = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Ethan Hunt', 'Fiona Gallagher', 'George Miller', 'Hannah Abbott', 'Ian Wright', 'Jenny Slate'];
    const texts = [
      'Amazing product! It has completely changed the way I manage my workflow. Highly recommended to everyone.',
      'Good quality, but the delivery was a bit slow. Overall satisfied with the purchase.',
      'Excellent customer service. They helped me solve my problem in no time!',
      'Best value for money. I have been using it for a month now and no complaints.',
      'The UI is very intuitive and clean. I love the new updates!',
      'Great experience so far. Looking forward to more features.',
      'Could be better, but still does the job well. Four stars from me.',
      'I am impressed by the performance. It is fast and reliable.',
      'Value for money and very easy to use.',
      'The best in the market. Period.'
    ];

    for (let i = 1; i <= 20; i++) {
      this.reviews.push({
        name: names[i % names.length],
        time: `${i} hours ago`,
        rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
        text: texts[i % texts.length],
        avatar: `https://i.pravatar.cc/150?u=${i}`
      });
    }
  }
}

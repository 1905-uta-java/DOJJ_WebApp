import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {

  noReviews = false;
  isNew = false;
  @Input() MovieId;
  allReviews: any = [];

  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getReviews(this.MovieId).subscribe((reviews) => {
      this.allReviews = reviews;
      if (this.allReviews.length === 0) {
        this.noReviews = true;
      }
    });

  }

}

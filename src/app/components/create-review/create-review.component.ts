import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  @Input() MovieId: number;
  @Output() newReview = new EventEmitter();
  isLoggedIn: boolean;
  isReview = true;
  starValue = 1;
  info = '';
  failedCreate = false;
  invalidInput = false;

  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  // Set the star value when changed
  setStarValue(level: number) {
    this.starValue = level;
  }

  // When review submit button is clicked
  submitReview() {
    this.failedCreate = false;
    this.invalidInput = false;
    if (this.verifyFilledFields()) {
      const nReview = {id: '',
      rating: this.starValue,
      body: this.info,
      userId: sessionStorage.getItem('userId'),
      movieId: this.MovieId,
      credibilityScore: 0};

      this.reviewService.postReview(nReview).subscribe((createdReview) => {
        if  (createdReview !== null) {
          this.newReview.emit(createdReview);
        } else {
          this.failedCreate = true;
        }
      });
    } else {
      this.invalidInput = true;
    }

  }

  // Make sure user entered in meaningful information for the review
  verifyFilledFields(): boolean {
    if (this.info !== '') {
      return true;
    } else {
      return false;
    }
  }

}

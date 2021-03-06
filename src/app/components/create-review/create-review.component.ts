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
  isReview = true;
  starValue = 1;
  info = '';
  failedCreate = false;
  invalidInput = false;
  ls = localStorage;

  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
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

      // put the id and score in this review object and pass it in.
      const user = JSON.parse(localStorage.getItem('currentUser'));
      const nReview = {id: '',
      username: user.username,
      reviewContent: this.info,
      movieId: this.MovieId,
      rating: this.starValue,
      userScore: 0,
      created: new Date()
    };

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

    this.info = '';
    this.starValue = 1;

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

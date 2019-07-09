import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { ReputationService } from 'src/app/services/reputation.service';

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


  constructor(private repService: ReputationService, private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getReviews(this.MovieId).subscribe((reviews) => {
      this.allReviews = reviews;
      if (this.allReviews.length === 0) {
        this.noReviews = true;
      }
    });


  }

  increaseCredScore(username : string, reviewId : number)
  {
    console.log("Score is being increased for " + username);

    // establish our object
    const nReview =
    {
      id: reviewId,
      username: '',
      reviewContent: '',
      movieId: '',
      rating: '',
      userScore: 1,
      created: ''
    };

    const user = {email: '', username: username, password: '', reputation: 1, privilege: ''};
    console.log(nReview);
    console.log(user);
    // send it off with the service
    this.repService.putRep(user, nReview).subscribe(response => {

    });
  }

  decreaseCredScore(username : string, reviewId : number)
  {
    console.log("Score is being decreased for " + username);

    const nReview =
    {
      id: reviewId,
      username: '',
      reviewContent: '',
      movieId: '',
      rating: '',
      userScore: -1,
      created: ''
    };

    const user = {email: '', username: username, password: '', reputation: -1, privilege: ''};

    console.log(nReview);
    console.log(user);

    this.repService.putRep(user, nReview).subscribe(response => {
    });
  }

}

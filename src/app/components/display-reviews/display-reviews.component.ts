import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { UserService } from 'src/app/services/user.service';

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
  neitherButtonClicked = true;
  positiveButtonClicked = false;
  negativeButtonClicked = false;


  constructor(private reviewService: ReviewsService, private userService : UserService) { }

  ngOnInit() {
    this.reviewService.getReviews(this.MovieId).subscribe((reviews) => {
      this.allReviews = reviews;
      if (this.allReviews.length === 0) {
        this.noReviews = true;
      }
    });
    

  }

  increaseCredScore(un : string, reviewId : string)
  {
    this.positiveButtonClicked = true;
    this.neitherButtonClicked = false;
    this.negativeButtonClicked = false;
    console.log("increase score is being called for " + un);

    // establish our object
    const nReview = 
    {
      id: reviewId,
      username: '',
      reviewContent: '',
      movieId: '',
      rating: '',
      userScore: "1",
      created: ''
    };

    const user = {email: '', username: un, password: '', reputation: "1", privilege: ''};

    // send it off with the service
    if (this.positiveButtonClicked)
    {
      this.reviewService.putReview(nReview);
    
      // USER SERVICE CALL GOES HERE
      this.userService.putUser(user);
    }
  }

  decreaseCredScore(un : string, reviewId : string)
  {
    this.negativeButtonClicked = true;
    this.positiveButtonClicked = false;
    this.neitherButtonClicked = false;
    console.log("decrease score being called for " + un);

    const nReview = 
    {
      id: reviewId,
      username: '',
      reviewContent: '',
      movieId: '',
      rating: '',
      userScore: "-1",
      created: ''
    };

    const user = {email: '', username: un, password: '', reputation: "-1", privilege: ''};

    if (this.negativeButtonClicked)
    {
      this.reviewService.putReview(nReview);
    
      // USER SERVICE CALL GOES HERE
      this.userService.putUser(user);
    }
  }

}

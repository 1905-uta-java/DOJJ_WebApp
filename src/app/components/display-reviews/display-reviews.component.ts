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


  constructor(private reviewService: ReviewsService, private userService : UserService) { }

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

    // send it off with the service
    this.reviewService.putReview(nReview);
    
    // USER SERVICE CALL GOES HERE
    this.userService.putUser(user);
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

    this.reviewService.putReview(nReview);
    
    // USER SERVICE CALL GOES HERE
    this.userService.putUser(user);
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  @Input() CreatedReview;
  allReviews: any = [];


  constructor(private repService: ReputationService, private reviewService: ReviewsService) { }

  ngOnInit() {
    this.genReviews();
  }

  increaseCredScore(review) {
    let inter = JSON.parse(localStorage.getItem('interactions'));
    if (inter !== null) {
      let intRev = inter.interaction.find(r => r.id === review.id);
      if ((intRev === undefined || intRev.action === 'minus' || intRev.action === 'neutral')
        && localStorage.getItem('isLoggedIn') === 'true') {
        if (intRev !== undefined && intRev.action === 'minus') {
          inter.interaction.find(r => r.id === review.id).action = 'neutral';
        } else if (intRev !== undefined && intRev.action === 'neutral') {
          inter.interaction.find(r => r.id === review.id).action = 'plus';
        } else {
          inter.interaction.push({id: review.id, action: 'plus'});
        }

        review.userScore = 1;
        const user = {email: '', username: review.username, password: '', reputation: 1, privilege: ''};

        this.repService.putRep(user, review).subscribe(response => {
        const res = response;
        localStorage.setItem('interactions', JSON.stringify(inter));
        this.genReviews();
        });
      }
    }
  }

  decreaseCredScore(review) {
    let inter = JSON.parse(localStorage.getItem('interactions'));
    if (inter !== null) {
      let intRev = inter.interaction.find(r => r.id === review.id);
      if ((intRev === undefined || intRev.action === 'plus' || intRev.action === 'neutral')
        && localStorage.getItem('isLoggedIn') === 'true') {
        if (intRev !== undefined && intRev.action === 'plus') {
          inter.interaction.find(r => r.id === review.id).action = 'neutral';
        } else if (intRev !== undefined && intRev.action === 'neutral') {
          inter.interaction.find(r => r.id === review.id).action = 'minus';
        } else {
          inter.interaction.push({id: review.id, action: 'minus'});
        }
        review.userScore = -1;
        const user = {email: '', username: review.username, password: '', reputation: 1, privilege: ''};

        this.repService.putRep(user, review).subscribe(response => {
          const res = response;
          localStorage.setItem('interactions', JSON.stringify(inter));
          this.genReviews();
        });
      }
    }
  }

  genReviews() {
    this.reviewService.getReviews(this.MovieId).subscribe((reviews) => {
      this.allReviews = reviews;
      if (this.allReviews.length === 0) {
        this.noReviews = true;
      }
    });
  }

}

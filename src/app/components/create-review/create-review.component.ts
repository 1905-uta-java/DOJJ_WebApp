import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  isReview = true;
  starValue = 1;
  info = '';

  constructor() { }

  ngOnInit() {
    this.isLoggedIn = true;
  }


  setStarValue(level: number) {
    this.starValue = level;
  }

  submitReview() {

  }

}

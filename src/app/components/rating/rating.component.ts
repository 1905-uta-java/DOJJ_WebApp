import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() newReview: boolean;

  @Output() starValue = new EventEmitter<number>();

  @Input() movieRating: string;

  fill1 = 's';
  fill2 = 'r';
  fill3 = 'r';
  fill4 = 'r';
  fill5 = 'r';

  constructor() { }

  ngOnInit() {
    if (!this.newReview) {
      this.initialSetStarLevel(this.movieRating);
    }
  }

  initialSetStarLevel(level: string){
    switch (level) {
      case '1':
        this.starValue.emit(1);
        this.fill1 = 's';
        this.fill2 = 'r';
        this.fill3 = 'r';
        this.fill4 = 'r';
        this.fill5 = 'r';
        break;
      case '2':
        this.starValue.emit(2);
        this.fill1 = 's';
        this.fill2 = 's';
        this.fill3 = 'r';
        this.fill4 = 'r';
        this.fill5 = 'r';
        break;
      case '3':
        this.starValue.emit(3);
        this.fill1 = 's';
        this.fill2 = 's';
        this.fill3 = 's';
        this.fill4 = 'r';
        this.fill5 = 'r';
        break;
      case '4':
        this.starValue.emit(4);
        this.fill1 = 's';
        this.fill2 = 's';
        this.fill3 = 's';
        this.fill4 = 's';
        this.fill5 = 'r';
        break;
      case '5':
        this.starValue.emit(5);
        this.fill1 = 's';
        this.fill2 = 's';
        this.fill3 = 's';
        this.fill4 = 's';
        this.fill5 = 's';
        break;
    }
  }

  setStarLevel(level: string) {
    if (this.newReview) {
      switch (level) {
        case '1':
          this.starValue.emit(1);
          this.fill1 = 's';
          this.fill2 = 'r';
          this.fill3 = 'r';
          this.fill4 = 'r';
          this.fill5 = 'r';
          break;
        case '2':
          this.starValue.emit(2);
          this.fill1 = 's';
          this.fill2 = 's';
          this.fill3 = 'r';
          this.fill4 = 'r';
          this.fill5 = 'r';
          break;
        case '3':
          this.starValue.emit(3);
          this.fill1 = 's';
          this.fill2 = 's';
          this.fill3 = 's';
          this.fill4 = 'r';
          this.fill5 = 'r';
          break;
        case '4':
          this.starValue.emit(4);
          this.fill1 = 's';
          this.fill2 = 's';
          this.fill3 = 's';
          this.fill4 = 's';
          this.fill5 = 'r';
          break;
        case '5':
          this.starValue.emit(5);
          this.fill1 = 's';
          this.fill2 = 's';
          this.fill3 = 's';
          this.fill4 = 's';
          this.fill5 = 's';
          break;
      }
    }
  }

}

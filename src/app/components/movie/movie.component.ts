import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { MovieInfoService } from 'src/app/services/movie-info.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  isLoggedIn;
  movieId;
  createdReview;
  url;
  movie: any = {title: '', overview: '', release_date: '', status: '', original_language: '', backdrop_path: ''};


  // use obtained parameters to assemble the request URL
  constructor(private route: ActivatedRoute, private router: Router, private movieInfoService: MovieInfoService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.movieId = params.id;
        console.log(this.movieId);
        this.url = 'https://api.themoviedb.org/3/movie/' + this.movieId + '?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US';
        console.log(this.url);
        this.movieInfoService.getMovieInfo(this.url).subscribe((information) => {
          this.movie = information;
          // this.title = this.movie.title;
          // this.returnedMovie = information;
          console.log(this.movie);
        });


      });
  }





  setCreatedReview(review) {
    this.createdReview = review;
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(()=>
      this.router.navigate([`movie/${this.movieId}`]));
  }

}

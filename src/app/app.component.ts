import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';
  isLoggedIn = true;
  isAdmin = false;


  cleanInput = '';
  searchBox;

  constructor(private router: Router) { }

  getSearchResults(userSearch: string) {
    // clean user results to fit API calls
    console.log('YOUR CALLBACK FUNCTION is being called!');
    console.log(userSearch + 'is the value you entered!');
    this.cleanInput = userSearch.replace(' ', '%20');
    console.log(this.cleanInput + ' IS THE USER INPUT REPLACED WITH SPACES!');
    this.router.navigate([`search/${this.cleanInput}`]);
  }
}

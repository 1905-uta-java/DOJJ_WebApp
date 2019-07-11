import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-review';
  ls = localStorage;


  cleanInput = '';
  searchBox;

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') !== 'true' && localStorage.getItem('isLoggedIn') !== 'false') {
      localStorage.setItem('currentUser', JSON.stringify({email: '', username: '', password: '', reputation: 0, privilege: ''}));
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.setItem('isAdmin', 'false');
    }
  }

  getSearchResults(userSearch: string) {
    // clean user results to fit API calls
    this.cleanInput = userSearch.replace(' ', '%20');
    this.router.navigate([`search/${this.cleanInput}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.css']
})
export class AccountDropdownComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
  }


  logout() {
    localStorage.setItem('currentUser', '');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isAdmin', 'false');
    this.router.navigate([`home`]);
  }

  profileLink() {
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(() =>
      this.router.navigate([`profile/${this.username}`]));
  }

}

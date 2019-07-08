import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.css']
})
export class AccountDropdownComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
  }


  logout() {
    localStorage.setItem('currentUser', '');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('isAdmin', 'false');
  }

}

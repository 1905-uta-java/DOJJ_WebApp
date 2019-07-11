import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BanService } from 'src/app/services/ban.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAdmin = false;
  user;
  username = 'Name';
  email = 'SomeUser@gmail.com';
  isUserOfPage = false;
  credScore = 0;
  confirmButtonShow = false;
  isBanned = false;
  ls = localStorage;
  isCurrentUser;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private banService: BanService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.user;
    });

    if (this.username === JSON.parse(localStorage.getItem('currentUser')).username) {
      this.isUserOfPage = true;
      this.getCurUser();
    } else {
      if (localStorage.getItem('isAdmin') === 'true') {
        this.isAdmin = true;
      }
      this.getUser();
    }
  }

  changeShowConfirmation() {
    this.confirmButtonShow = !this.confirmButtonShow;
  }

  banUser() {
    this.isBanned = true;
    this.banService.banUser(this.username);
    this.router.navigate(['home']);
  }

  getUser() {
    this.userService.getUser(this.username).subscribe((newUser) => {
      this.user = newUser;
      this.credScore = this.user.reputation;
    });
  }

  getCurUser() {
    this.userService.getUser(this.username).subscribe((newUser) => {
      this.user = newUser;
      this.credScore = this.user.reputation;
      this.email = this.user.email;
    });
  }
}

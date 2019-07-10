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
  username = 'SomeUser';
  email = 'SomeUser@gmail.com';
  isUserOfPage = false;
  credScore = 0;
  confirmButtonShow = false;
  isBanned = false;
  ls = localStorage;
  isCurrentUser;
  user;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private banService : BanService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.user;
      if (this.username === JSON.parse(localStorage.getItem('currentUser')).username) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.isUserOfPage = true;
        this.credScore = user.reputation;
        this.username = user.username;
        this.email = user.email;
      } else {
        if (localStorage.getItem('isAdmin') === 'true') {
          this.isAdmin = true;
        }
        this.userService.getUser(this.username).subscribe((newUser) => {
          this.user = newUser;
          this.credScore = this.user.reputation;
          this.username = this.user.username;
        });
      }
    });
  }

  changeShowConfirmation()
  {
    console.log("Text should change to ARE YOU SURE?!");
    this.confirmButtonShow = !this.confirmButtonShow;
    console.log("show confirmation is: " + this.confirmButtonShow)
  }

  banUser()
  {
    console.log("Ban User is being called!");
    this.isBanned = true;
    this.banService.banUser(this.username);
    this.router.navigate(["home"]);
  }

}

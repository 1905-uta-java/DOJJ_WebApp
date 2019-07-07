import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAdmin = true;
  username : string = "SomeUser";
  email: string = "SomeUser@gmail.com";
  isUserOfPage = true;
  credScore : number = 6;
  showConfirmation = false;
  isBanned = false;

  constructor() { }

  ngOnInit() {
  }

  changeIsSure()
  {
    console.log("Text should change to ARE YOU SURE?!");
    this.showConfirmation = !this.showConfirmation;
  }

  banUser()
  {
    console.log("User has been banned!");
    this.isBanned = true;
  }

}

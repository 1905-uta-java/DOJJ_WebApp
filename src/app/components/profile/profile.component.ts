import { Component, OnInit } from '@angular/core';
import { BanService } from 'src/app/services/ban.service';


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
  confirmButtonShow = false;
  isBanned = false;
  banUrl : string = "http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/MovieReviews/users"

  constructor(private banService: BanService) { }

  ngOnInit() {
  }

  changeShowConfirmation()
  {
    console.log("Text should change to ARE YOU SURE?!");
    this.confirmButtonShow = !this.confirmButtonShow;
    console.log("show confirmation is: " + this.confirmButtonShow)
  }

  banUser(banService)
  {
    console.log("Ban User is being called!");
    this.isBanned = true;
    this.banService.banUser(this.banUrl);
  }

}

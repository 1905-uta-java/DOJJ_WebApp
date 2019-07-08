import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.css']
})
export class LoginDropdownComponent implements OnInit {

  usname: string;
  pass: string;
  user;
  failedLogin = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.failedLogin = false;
    this.loginService.postLogin(this.usname, this.pass).subscribe((currentUser) => {
      this.user = currentUser;
      console.log(this.user);
      if (this.user.username === this.usname) {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        localStorage.setItem('isLoggedIn', 'true');
        console.log(this.user);
        const priv = this.user.privilege;
        if (priv.charAt(1) === '2') {
          localStorage.setItem('isAdmin', 'true');
          console.log('They are an admin');
        } else {
          localStorage.setItem('isAdmin', 'false');
        }

      } else {
        this.failedLogin = true;
      }

    });
  }

}

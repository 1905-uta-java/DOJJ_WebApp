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
  isLoading = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.failedLogin = false;
    this.loginService.postLogin(this.usname, this.pass).subscribe((currentUser) => {
      this.user = currentUser;
      if (this.user.username === this.usname) {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        localStorage.setItem('isLoggedIn', 'true');

        // RETRIEVE PAST INTERATIONS HERE
        const interactions = {username: this.user.username, interaction: [{id: 0, action: ''}]};

        localStorage.setItem('interactions', JSON.stringify(interactions));

        const priv = this.user.privilege;
        if (priv.charAt(1) === '2') {
          localStorage.setItem('isAdmin', 'true');
        } else {
          localStorage.setItem('isAdmin', 'false');
        }

      } else {
        this.failedLogin = true;
      }

    });
    this.isLoading = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { CreateNewUserService } from 'src/app/services/create-new-user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  mail: string;
  usname: string;
  pass: string;
  isCreated = false;

    // get all used usernames
  // store in local storage
  // to check if available
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', Validators.required)
    })
  });

  constructor(private createNewUserService: CreateNewUserService, private router: Router) { }

  submitSignup() {
    this.mail = this.form.get('account.email').value;
    this.usname = this.form.get('account.username').value;
    this.pass = this.form.get('account.password').value;

    console.log('email is ' + this.mail + '. user name is '
     + this.usname + '. password is ' + this.pass);

    this.createNewUserService.postNewUser(this.mail, this.usname, this.pass).subscribe((currentUser) => {
      console.log(currentUser);
      this.isCreated = true;
      this.router.navigate([`home`]);
    });

  }

  ngOnInit() {
    this.isCreated = false;
    }

}

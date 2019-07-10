import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  invalidPassword = false;
  oldPass;
  newPass1;
  newPass2;
  constructor(private fb: FormBuilder, private us: UserService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submitPasswordChange() {
    this.invalidPassword = false;
    if (this.newPass1 === this.newPass2) {
      let user = {email: '', username: JSON.parse(localStorage.getItem('currentUser')).username,
              password: this.oldPass, reputation: 0, privilege: ''};
      this.us.validPassword(user).subscribe((validation) => {
        if (validation === 'Valid') {
          user.password = this.newPass1;
          this.us.changePassword(user).subscribe((val) => {console.log(val)});
        } else {
          this.invalidPassword = true;
        }
      });
    } else {
      this.invalidPassword = true;
    }
  }

}

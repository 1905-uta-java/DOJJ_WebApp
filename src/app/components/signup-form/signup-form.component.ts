import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      UsernameValidators.shouldBeUnique),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        EmailValidators.cannotContainSpace
      ],
      EmailValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get email() {
    return this.form.get('account.email');
  }
}

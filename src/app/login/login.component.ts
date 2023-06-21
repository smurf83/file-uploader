import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  val = {
    email: 'hello@gmail.com',
    password: '123456',
  };

  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, submit: any) {
    console.log(loginForm.value, loginForm.valid, submit);

    console.log('val', this.val);
  }

  hasError(control: NgModel, errorName: string): boolean {
    return control.errors && control.errors[errorName];
  }

  getError(control: NgModel, errorName: string): any {
    return control.errors ? control.errors[errorName] : {};
  }
}

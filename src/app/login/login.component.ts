import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  login(loginForm: NgForm, submit: any) {
    console.log(loginForm.value, loginForm.valid, submit);

    if (loginForm.valid) {
      this.router.navigate(['/files']);
      this.snackBar.open('You are logged in', '', {
        duration: 2000,
      });
    }
  }

  hasError(control: NgModel, errorName: string): boolean {
    return control.errors?.[errorName] ?? false;
  }

  getError(control: NgModel, errorName: string): any {
    return control.errors ? control.errors[errorName] : {};
  }
}

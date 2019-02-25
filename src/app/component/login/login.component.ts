import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  onsubmit() {
    alert(JSON.stringify(this.loginForm.value));
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from '@angular/forms';
import { LoginService } from './../../service/login.service';
import { LoginConfig } from './../../interface/login-config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService) {}
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });
  ngOnInit() {
    localStorage.setItem('key', undefined);
  }
  loginForm = this.fb.group({
    email: ['sasef@gmail.com', [Validators.required, Validators.email]],
    password: ['sasef@gmail.com', Validators.required]
  });
  onsubmit() {
    //alert(JSON.stringify(this.loginForm.value));
    this.loginService
      .loginCheck(this.loginForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('key', `Bearer ${data.token}`);
      });
  }
}

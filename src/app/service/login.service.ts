import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginConfig } from './../interface/login-config';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUrl = 'http://localhost:5000/api/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('key')
    })
  };

  loginCheck(data: LoginConfig) {
    console.log(localStorage.getItem('key'));

    return this.http.post(this.loginUrl, data, this.httpOptions);
  }
}

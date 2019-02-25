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
      Authorization: 'my-auth-token'
    })
  };

  loginCheck(data: LoginConfig) {
    return this.http.post(this.loginUrl, data, this.httpOptions);
  }
}

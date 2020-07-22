import { Injectable } from '@angular/core';
import { url_api } from './url_api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers: {};
  constructor(private http: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    };
  }

  loginUser(user) {
    return this.http.post(`${url_api}/api/v1/token`,
      { username: user.username, password: user.password },
      { headers: this.headers })
  }

}

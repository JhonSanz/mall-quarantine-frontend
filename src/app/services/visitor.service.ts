import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_api } from './url_api';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private headers: {};
  constructor(private http: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    };
  }

  signupVisitor(visitor) {
    return this.http.post(`${url_api}/api/v1/visitor`,
      { name: visitor.name, email: visitor.email },
      { headers: this.headers })
  }

}

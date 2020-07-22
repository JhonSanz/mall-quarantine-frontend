import { Injectable } from '@angular/core';
import { url_api } from './url_api';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MallService {

  private headers: {};
  constructor(private http: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    };
  }

  createMall(mall) {
    return this.http.post(`${url_api}/api/v1/mall`,
      { name: mall.name },
      { headers: this.headers })
  }

}

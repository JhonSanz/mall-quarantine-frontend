import { Injectable } from '@angular/core';
import { url_api } from './url_api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  private headers: {};
  constructor(private http: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    };
  }

  public createRegistry(registry) {
    return this.http.post(`${url_api}/api/v1/registry`,
      {
        email: registry.email, malls: registry.malls,
        temperature: registry.temperature
      },
      { headers: this.headers })
  }

  public getRegistry() {
    return this.http.get(`${url_api}/api/v1/registry`,
      { headers: this.headers })
  }

  public filterRegistry(params?) {
    return this.http.get(`${url_api}/api/v1/registry?${params}`, { headers: this.headers })
  }

}

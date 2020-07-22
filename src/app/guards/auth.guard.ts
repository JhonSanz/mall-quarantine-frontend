import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  auth = localStorage.getItem('accessToken')
  constructor(private router: Router) { }
  canActivate() {
    if (this.auth) {
      return true
    } else {
      this.router.navigate(['/'])
      return false
    }
  }

}

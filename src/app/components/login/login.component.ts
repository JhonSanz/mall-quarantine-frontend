import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  public onLogin(data) {
    this.loginService.loginUser(data).subscribe(
      response => {
        localStorage.setItem('accessToken', response['access'])
        this.router.navigateByUrl('/registry')
      }, error => {
        Swal.fire({
          title: 'Error de inicio de sesión',
          text: "Contraseña o username inválidos",
          icon: 'error',
          onClose: () => window.location.reload()
        })
      }
    )
  }

}

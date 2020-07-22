import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  constructor(
    private visitorService: VisitorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public visitorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })

  public onRegister(data) {
    this.visitorService.signupVisitor(data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Datos correctos',
          text: 'Visitante registrado con éxito',
          onClose: () => location.reload()
        });
      }, error => {
        switch (error.status) {
          case 401:
            this.router.navigateByUrl("/")
            break
          case 400:
            Swal.fire({
              icon: 'error',
              title: 'Datos inválidos',
              text: 'Something went wrong!',
              onClose: () => location.reload()
            });
            break
        }
      }
    )
  }

}

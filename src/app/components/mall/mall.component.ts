import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MallService } from 'src/app/services/mall.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-mall',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.css']
})
export class MallComponent implements OnInit {

  constructor(
    private mallService: MallService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public mallForm = new FormGroup({
    name: new FormControl('', Validators.required),
  })

  public onCreateMall(data) {
    // this.mallService.createMall(data).subscribe(
    //   response => {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Datos correctos',
    //       text: 'Tienda registrada con éxito',
    //       onClose: () => location.reload()
    //     });
    //   }, error => {
    //     switch (error.status) {
    //       case 401:
    //         this.router.navigateByUrl("/")
    //         break
    //       case 400:
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Datos inválidos',
    //           text: 'Something went wrong!',
    //           onClose: () => location.reload()
    //         });
    //         break
    //     }
    //   }
    // )
  }
}

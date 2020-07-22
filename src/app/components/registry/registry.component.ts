import { Component, OnInit } from '@angular/core';
import { RegistryService } from 'src/app/services/registry.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MallService } from 'src/app/services/mall.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  public registry: any;
  public malls: any;
  constructor(
    private registryService: RegistryService,
    private mallService: MallService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registryService.getRegistry().subscribe(data => {
      this.registry = data;
    })
    this.mallService.getMalls().subscribe(data => {
      this.malls = data;
    })
  }

  public onCreateRegistry(data) {
    this.registryService.createRegistry(data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Datos correctos',
          text: 'Tienda registrada con éxito',
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

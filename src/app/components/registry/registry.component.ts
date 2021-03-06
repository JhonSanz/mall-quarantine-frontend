import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  public registries: any;
  public malls: any;
  constructor(
    private registryService: RegistryService,
    private mallService: MallService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registryService.getRegistry().subscribe(data => {
      this.registries = data;
    })
    this.mallService.getMalls().subscribe(data => {
      this.malls = data;
    })
  }

  public registryForm = new FormGroup({
    email: new FormControl('', Validators.required),
    malls: new FormControl('', Validators.required),
    temperature: new FormControl('', Validators.required),
  })

  public filteringForm = new FormGroup({
    name: new FormControl('',),
    temperature: new FormControl('',),
  })

  public onCreateRegistry(data) {
    data["malls"] = data["malls"].map(id => parseInt(id))
    this.registryService.createRegistry(data).subscribe(
      response => {
        if (response) {
          switch (response["code"]) {
            case "dangerous_visitor":
              Swal.fire({
                title: 'Visitante peligroso',
                text: "Este visitante presenta temperatura alta, se prohíbe su acceso y será restringido una semana",
                icon: 'warning',
                onClose: () => window.location.reload()
              })
              break
          }
        }
        Swal.fire({
          icon: 'success',
          title: 'Datos correctos',
          text: 'Visitante registrado con éxito',
          onClose: () => window.location.reload()
        });
      }, error => {
        switch (error.status) {
          case 401:
            this.router.navigateByUrl("/")
            break
          case 404:
            Swal.fire({
              title: 'Error en el formulario',
              text: "El visitante no ha sido registrado",
              icon: 'error',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Registrar Visitante'
            }).then((result) => {
              if (result.value) {
                this.router.navigateByUrl("/visitor")
              }
            })
            break;
          case 400:
            switch (error.error.code) {
              case "dangerous_visitor":
                Swal.fire({
                  title: 'Visitante peligroso',
                  text: "Este visitante presentó temperatura alta días antes",
                  icon: 'warning',
                  onClose: () => window.location.reload()
                })
                break
              default:
                Swal.fire({
                  title: 'Datos inválidos',
                  text: "Hubo un error en el formulario",
                  icon: 'error',
                  onClose: () => window.location.reload()
                })
            }
            break
        }
      }
    )
  }

  public filterRegistry(params) {
    let filters = "";
    Object.keys(params).forEach(function (key) {
      if (params[key])
        filters += `${key}=${params[key]}&`
    })
    this.registryService.filterRegistry(filters).subscribe(data => {
      this.registries = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor.service'
import { Router } from '@angular/router';

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
        location.reload()
      }, error => {
        switch(error) {
          case 401:
            this.router.navigateByUrl("")
            break
          case 400:
            alert("Errores en el formulario")
          
        }
      
        console.log(error)
      }
    )
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VisitorComponent } from './components/visitor/visitor.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MallComponent } from './components/mall/mall.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisitorComponent,
    MallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

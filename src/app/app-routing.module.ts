import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { MallComponent } from './components/mall/mall.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'visitor', component: VisitorComponent },
  { path: 'mall', component: MallComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { MallComponent } from './components/mall/mall.component';
import { RegistryComponent } from './components/registry/registry.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'visitor', component: VisitorComponent, canActivate: [AuthGuard] },
  { path: 'mall', component: MallComponent, canActivate: [AuthGuard] },
  { path: 'registry', component: RegistryComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

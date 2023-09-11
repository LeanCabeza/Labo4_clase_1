import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component: BienvenidoComponent},
  {path:'main',component: BienvenidoComponent},
  {path:'login',component: LoginComponent},
  {path:'error',component: ErrorComponent},
  {path:'calculator',component: CalculatorComponent},
  {path:'register',component: RegisterComponent},
  {path:'**',component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

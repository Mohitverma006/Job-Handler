import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
},
{
  path:'forgetPassword',
  component:ForgetPasswordComponent
},
{
  path:'createAccount',
  component:CreateAccountComponent
},
{
  path:'home',
  component:HomeComponent
},



{
	path:'',
	component:LoginComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

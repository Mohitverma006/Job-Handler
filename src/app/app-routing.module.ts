import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HandlerDetailComponent } from './handler-detail/handler-detail.component';
import { AllApplicantComponent } from './all-applicant/all-applicant.component';
import { AllApplicantListComponent } from './all-applicant-list/all-applicant-list.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { PendingApplicantComponent } from './pending-applicant/pending-applicant.component';
import { PEDOSComponent } from './pedos/pedos.component';
import { PedosListComponent } from './pedos-list/pedos-list.component';
import { OWWAComponent } from './owwa/owwa.component';

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
  component:HomeComponent,
  children:[
		{
			path:'',
			component:HandlerDetailComponent
    },
    {
      path:'applicant',
      component:AllApplicantComponent,
      children:[
        {
          path:'',
          component:AllApplicantListComponent
        },
        {
          path:'all',
          component:AllApplicantListComponent
        },
        {
          path:'final',
          component:FinalApplicantComponent
        },
        {
          path:'pending',
          component:PendingApplicantComponent
        }

        
      ]
    },
    { 
        path:'pedos',
        component:PEDOSComponent,
        children:[
          {
            path:'',
            component:PedosListComponent
          }
        ]
    },
    {
      path:'OWWA',
      component:OWWAComponent
    },
    
  ]
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

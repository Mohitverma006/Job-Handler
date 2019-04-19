import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HandlerDetailComponent } from './handler-detail/handler-detail.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { PendingApplicantComponent } from './pending-applicant/pending-applicant.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { FinalMedDetailComponent } from './final-med-detail/final-med-detail.component';
import { TesdaDetailComponent } from './tesda-detail/tesda-detail.component';
import { JobOrderDetailComponent } from './job-order-detail/job-order-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PEDOSComponent } from './pedos/pedos.component';
import { PedosListComponent } from './pedos-list/pedos-list.component';
import { OWWAComponent } from './owwa/owwa.component';
import { SchedulePEDOSComponent } from './schedule-pedos/schedule-pedos.component';
import { ScheduleOWWAComponent } from './schedule-owwa/schedule-owwa.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';

const routes: Routes = [
{
    path:'',
    component:LoginComponent
},

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
			path:'handlerDetail',
			component:HandlerDetailComponent
    },
    {
      path:'applicant',
      component:ApplicantComponent,
      children:[
        {
          path:'',
          component:ApplicantListComponent,
        },
        {
              path:'detail',
              component:ApplicantDetailComponent,
              children:[
                {
                  path:'',
                  component:PersonalDetailComponent
                },
                {
                  path:'personal',
                  component:PersonalDetailComponent
                },
                {
                  path:'preMed',
                  component:PreMedDetailComponent
                },
                {
                  path:'passport',
                  component:PassportDetailComponent
                },
                {
                  path:'finalMed',
                  component:FinalMedDetailComponent
                },
                {
                  path:'tesda',
                  component:TesdaDetailComponent
                },
                {
                  path:'jobOrder',
                  component:JobOrderDetailComponent
                }
              ]
            }
          ]
        },

    {
          path:'final',
          component:FinalApplicantComponent,
          children:[
            {
              path:'',
              component:ApplicantListComponent,
            },
            {
                  path:'detail',
                  component:ApplicantDetailComponent,
                  children:[
                    {
                      path:'',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'personal',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'preMed',
                      component:PreMedDetailComponent
                    },
                    {
                      path:'passport',
                      component:PassportDetailComponent
                    },
                    {
                      path:'finalMed',
                      component:FinalMedDetailComponent
                    },
                    {
                      path:'tesda',
                      component:TesdaDetailComponent
                    },
                    {
                      path:'jobOrder',
                      component:JobOrderDetailComponent
                    }
                  ]
                }
              ]
     },
     {
          path:'pending',
          component:PendingApplicantComponent,
          children:[
            {
              path:'',
              component:ApplicantListComponent,
            },
            {
                  path:'detail',
                  component:ApplicantDetailComponent,
                  children:[
                    {
                      path:'',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'personal',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'preMed',
                      component:PreMedDetailComponent
                    },
                    {
                      path:'passport',
                      component:PassportDetailComponent
                    },
                    {
                      path:'finalMed',
                      component:FinalMedDetailComponent
                    },
                    {
                      path:'tesda',
                      component:TesdaDetailComponent
                    },
                    {
                      path:'jobOrder',
                      component:JobOrderDetailComponent
                    }
                  ]
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
          },
          {
            path:'pedos',
            component:PedosListComponent
          },
          {
            path:'schedule-Pedos',
            component:SchedulePEDOSComponent
          },
        ]
    },
    {
      path:'OWWA',
      component:OWWAComponent
    },
    {
      path:'schedule-owwa',
      component:ScheduleOWWAComponent
    },

  ]
},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

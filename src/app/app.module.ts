import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HandlerDetailComponent } from './handler-detail/handler-detail.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { PendingApplicantComponent } from './pending-applicant/pending-applicant.component';
import { PEDOSComponent } from './pedos/pedos.component';
import { PedosListComponent } from './pedos-list/pedos-list.component';
import { OWWAComponent } from './owwa/owwa.component';
import { SchedulePEDOSComponent } from './schedule-pedos/schedule-pedos.component';
import { ScheduleOWWAComponent } from './schedule-owwa/schedule-owwa.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { FinalMedDetailComponent } from './final-med-detail/final-med-detail.component';
import { TesdaDetailComponent } from './tesda-detail/tesda-detail.component';
import { JobOrderDetailComponent } from './job-order-detail/job-order-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CreateAccountComponent,
    HomeComponent,
    HandlerDetailComponent,
    FinalApplicantComponent,
    PendingApplicantComponent,
    PEDOSComponent,
    OWWAComponent,
    PedosListComponent,
    SchedulePEDOSComponent,
    ScheduleOWWAComponent,
    PreMedDetailComponent,
    PassportDetailComponent,
    FinalMedDetailComponent,
    TesdaDetailComponent,
    JobOrderDetailComponent,
    PersonalDetailComponent,
    ApplicantComponent,
    ApplicantListComponent,
    ApplicantDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

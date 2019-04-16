import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CreateAccountComponent,
    HomeComponent,
    HandlerDetailComponent,
    AllApplicantComponent,
    AllApplicantListComponent,
    FinalApplicantComponent,
    PendingApplicantComponent,
    PEDOSComponent,
    OWWAComponent,
    PedosListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

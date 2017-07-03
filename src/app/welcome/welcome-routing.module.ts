import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { SignUpComponent } from 'app/sign-up/sign-up.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const welcomeRoutes: Routes
  = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'welcome', component: WelcomeComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(welcomeRoutes)
  ],
  declarations: [],
  exports
})
export class WelcomeRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { WelcomeComponent } from 'app/welcome/welcome.component';

import { LoginComponent } from 'app/login/login.component';
import { SignUpComponent } from 'app/sign-up/sign-up.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const routes: Routes
  = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'welcome', component:WelcomeComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }

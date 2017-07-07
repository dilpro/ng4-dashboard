import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HomeComponent } from 'app/home/home.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';

const welcomeRoutes: Routes
  = [
      {
        path:'welcome',
        component:WelcomeComponent,
        children:[
           {
            path:'',
            component: DashboardComponent,
          },
          {
            path:'about',
            component: AboutComponent,
          },
          {
            path:'contact',
            component: ContactComponent,
          },
          {
            path:'home',
            component: HomeComponent,
          }
        ]
      }
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(welcomeRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class WelcomeRoutingModule { }

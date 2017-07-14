import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HomeComponent } from 'app/home/home.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { UserComponent } from 'app/user/user.component';
import { UserListComponent } from "app/user/user-list/user-list.component";
import { UserSingleComponent } from "app/user/user-single/user-single.component";
import { UserCreateComponent } from "app/user/user-create/user-create.component";
import { UserEditComponent } from "app/user/user-edit/user-edit.component";

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
          },
          {
            path:'user',
            component:UserComponent,
            children:[
              {
                path:'',
                component: UserListComponent,
              },
              {
                path:'userlist',
                component: UserListComponent,
              },
              {
                path:'usersingle',
                component: UserSingleComponent,
              },
              {
                path:'usercreate',
                component: UserCreateComponent,
              },
              {
                path:'useredit',
                component: UserEditComponent,
              }
          
            ]
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

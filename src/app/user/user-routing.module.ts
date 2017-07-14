import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from 'app/user/user.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserCreateComponent } from 'app/user/user-create/user-create.component';
import { UserSingleComponent } from 'app/user/user-single/user-single.component';
import { UserEditComponent } from 'app/user/user-edit/user-edit.component';

const userRoutes: Routes
  = [
      {
        path:'User',
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
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class UserRoutingModule { }

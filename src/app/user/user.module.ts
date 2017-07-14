import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from 'app/user/user-routing.module';

import { UserComponent } from 'app/user/user.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserCreateComponent } from 'app/user/user-create/user-create.component';
import { UserSingleComponent } from 'app/user/user-single/user-single.component';
import { UserEditComponent } from 'app/user/user-edit/user-edit.component';

import { UserService } from 'app/shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,    
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserSingleComponent,
    UserEditComponent
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }

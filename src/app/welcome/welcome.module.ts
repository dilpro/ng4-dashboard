import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { CustomMaterialModule } from 'app/custom-material/custom-material.module';
import { UserModule } from 'app/user/user.module';
import { WelcomeRoutingModule } from 'app/welcome/welcome-routing.module';

import { WelcomeComponent } from 'app/welcome/welcome.component';
import { AboutComponent } from 'app/about/about.component';
import { HomeComponent } from 'app/home/home.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ContactComponent } from 'app/contact/contact.component';

import { UserService } from 'app/shared/services/user.service';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    CustomMaterialModule,
    UserModule,
    HttpModule
  ],
  declarations: [
    WelcomeComponent,
    AboutComponent,
    DashboardComponent,
    ContactComponent,
    HomeComponent
  ],
  providers:[
    UserService
  ]
})
export class WelcomeModule { }

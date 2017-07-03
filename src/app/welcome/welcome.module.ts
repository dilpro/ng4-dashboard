import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'app/custom-material/custom-material.module';

import { WelcomeComponent } from 'app/welcome/welcome.component';
import { AboutComponent } from 'app/about/about.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ContactComponent } from 'app/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    WelcomeComponent,
    AboutComponent,
    DashboardComponent,
    ContactComponent
  ]
})
export class WelcomeModule { }

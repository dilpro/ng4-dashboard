import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdSidenavModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MdSidenavModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule
  ],
  exports:[
    MdSidenavModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule
    ],
  declarations: []
})
export class CustomMaterialModule { }

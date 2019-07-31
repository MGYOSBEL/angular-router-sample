import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crisesRoutingModule } from './crisis-center-routing.module';
import {crisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {crisisListComponent} from './crisis-list/crisis-list.component';
import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';



@NgModule({
  declarations: [
    crisisListComponent,
    crisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
    crisesRoutingModule,
    FormsModule
  ]
})
export class CrisisCenterModule  { }

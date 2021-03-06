import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {crisisListComponent} from './crisis-list/crisis-list.component';
import {crisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home/crisis-center-home.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: crisisListComponent,
        children: [
          {
            path: ':id',
            component: crisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class crisesRoutingModule { }

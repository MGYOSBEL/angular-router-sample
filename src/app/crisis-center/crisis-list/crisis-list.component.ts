import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { crisisService } from '../crisis.service';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class crisisListComponent implements OnInit {

  selectedcrisis: Crisis;

  selectedId : number;
  crises$ : Observable<Crisis[]>;

  constructor(private service: crisisService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getcrises();
      })
    );
  }




}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { Component, OnInit, Input } from '@angular/core';
import { Crisis } from '../crisis';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { crisisService } from '../crisis.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class crisisDetailComponent implements OnInit {

  crisis$ : Observable<Crisis>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: crisisService
              ) { }

  ngOnInit() {
    this.crisis$=this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>this.service.getcrisis(params.get('id')))
    );
  }

  gotocrises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the crisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crises', { id: crisisId, foo: 'foo' }]);
  }

}

import { Component, OnInit } from '@angular/core';
import {PartialObserver, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  template: `<app-awesome [observer]="observer"></app-awesome>`,
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {

  public observer: PartialObserver<any>;
  subject: Subject<any>;
  constructor() {
    this.subject = new Subject<any>();
    this.subject.pipe(
      distinctUntilChanged()
    ).subscribe(value => { console.log(value); });
    this.observer = this.subject;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {AsyncSubject, PartialObserver, Subject} from 'rxjs';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-another-parent',
  template: `<app-awesome [observer]="observer"></app-awesome>`,
  styleUrls: ['./another-parent.component.sass']
})
export class AnotherParentComponent {
  public observer: PartialObserver<any>;
  private subject: Subject<any>;
  constructor() {
    this.subject = new AsyncSubject<any>();
    this.subject.subscribe(value => { console.log(value); });
    this.observer = this.subject;
  }
}

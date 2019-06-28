import {Component, Input, OnInit} from '@angular/core';
import {PartialObserver} from 'rxjs';

@Component({
  selector: 'app-great',
  templateUrl: './great.component.html',
  styleUrls: ['./great.component.sass']
})
export class GreatComponent implements OnInit {

  @Input() observer: PartialObserver<any>;
  text: string;
  constructor() { }

  ngOnInit() {
  }

  send() {
    this.observer.next(this.text);
  }

  complete() {
    this.observer.complete();
  }

}

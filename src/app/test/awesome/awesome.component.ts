import {Component, Input, OnInit} from '@angular/core';
import {Observer, PartialObserver} from 'rxjs';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.sass']
})
export class AwesomeComponent implements OnInit {

  @Input() observer: PartialObserver<any>;
  text: string;
  constructor() { }

  ngOnInit() {
  }

  send() {
    this.observer.next(this.text);
  }

}

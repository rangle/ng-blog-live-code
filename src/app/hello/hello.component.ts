import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  title = 'Hello Component';
  constructor() {}

  ngOnInit() {}

  sayHello() {
    this.title = 'Say Hello Clicked';
  }
}

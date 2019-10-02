import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
})
export class ControlErrorComponent implements OnInit {
  @Input() formErrors: any;
  @Input() fieldName: string;
  constructor() {}

  ngOnInit() {}
}

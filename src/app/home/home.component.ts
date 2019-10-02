import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public fetchService: FetchService) {}
}

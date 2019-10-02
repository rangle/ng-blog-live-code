import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as AppActions from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new AppActions.GetArticlesAction());
    this.title = 'Angular Training!';
  }
}

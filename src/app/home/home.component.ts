import { Component } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as AppActions from '../store/app.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles$;
  didError$;
  selectedArticle$;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new AppActions.GetArticlesAction());
    this.articles$ = this.store.select('app').pipe(map(s => s.articles));
    this.selectedArticle$ = this.store.select('app').pipe(map(s => s.selectedArticle));
    this.didError$ = this.store.select('app').pipe(map(s => s.didError));
  }

  displaySelectedArticle(article: any) {
    this.store.dispatch(new AppActions.SelectArticleAction(article));
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchService, DataArticle } from '../fetch.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as AppActions from '../store/app.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit {
  didError = false;
  selectedArticle: DataArticle;
  subscription: Subscription;
  articles$;

  constructor(private fetchService: FetchService, private store: Store<AppState>) {
    this.store.dispatch(new AppActions.GetArticlesAction());
    this.articles$ = this.store.select('app').pipe(map(s => s.articles));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.fetchService.articles.subscribe(
      (articles: DataArticle[]) => {
        if (articles.length) {
          this.selectedArticle = articles[0];
        }
      },
      (error: Error) => {
        this.didError = true;
        console.log('sad path', error);
      },
    );
  }

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchService, DataArticle } from '../fetch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit {
  didError = false;
  selectedArticle: DataArticle;
  subscription: Subscription;

  constructor(private fetchService: FetchService) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.fetchService.articles
      .subscribe((articles: DataArticle[]) => {
        if (articles.length) {
         this.selectedArticle = articles[0];
        }
      }, (error: Error) => {
        this.didError = true;
        console.log('sad path', error);
      });
  }

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
}

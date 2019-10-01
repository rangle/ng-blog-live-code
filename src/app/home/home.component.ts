import { Component, OnInit } from '@angular/core';
import { FetchService, DataArticle } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedArticle: any;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.articles
      .subscribe((articles: DataArticle[]) => {
        if (articles.length) {
         this.selectedArticle = articles[0];
        }
      }, (error: Error) => {
        console.log('sad path', error);
      });
  }

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
}

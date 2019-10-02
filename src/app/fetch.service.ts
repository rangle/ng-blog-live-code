import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface DataArticle {
  author?: string;
  body: string;
  date: number[];
  isPublished: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  articles: DataArticle[] = [];
  selectedArticle: DataArticle;
  didError = false;

  constructor(private http: HttpClient) {
    this.http.get('https://angular-connect.rangleu.io/blogs').subscribe((data: DataArticle[]) => {
      this.articles = data;
      if (this.articles.length > 0) {
        this.selectedArticle = this.articles[0];
      }
    });
  }

  displaySelectedArticle(article: DataArticle) {
    this.selectedArticle = article;
  }
}

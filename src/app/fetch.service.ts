import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface BaseArticle {
  author?: string;
  body: string;
  id: number;
  isPublished: boolean;
  title: string;
}

interface DataArticle extends BaseArticle {
  date: number[];
}
export interface Article extends BaseArticle {
  date: Date;
}

const dataArticleToArticle = (article: DataArticle) => {
  const date = new Date(
    article.date[0], article.date[1], article.date[2],
    // article.date[3], article.date[4], article.date[5]
  );
  console.log('dates', date, article.date);
  return {
    ...article,
    date,
  };
};

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  articles: Article[] = [];
  selectedArticle: Article;
  didError = false;

  constructor(private http: HttpClient) {
    this.http.get('https://angular-connect.rangleu.io/blogs')
      .pipe(map((articles: DataArticle[]) => {
        return articles.map(dataArticleToArticle);
      }))
      .subscribe((data: Article[]) => {
        this.articles = data;
        if (this.articles.length > 0) {
          this.selectedArticle = this.articles[0];
        }
    });
  }

  displaySelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  save(article: Article) {
    const dataArticle = {
      ...article,
      date: [
        article.date.getFullYear(),
        article.date.getMonth(),
        article.date.getDate(),
        article.date.getHours(),
        article.date.getMinutes(),
        article.date.getSeconds(),
      ],
    };
    return this.http.post('https://angular-connect.rangleu.io/blogs', dataArticle)
      .pipe(tap((newData: DataArticle) => {
        // side effects
        const newArticle = dataArticleToArticle(newData);
        this.articles.push(newArticle);
        this.selectedArticle = newArticle;
      }));
  }
}

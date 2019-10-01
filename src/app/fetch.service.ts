import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DataArticle {
  author?: string;
  body: string;
  date: number[];
  isPublished: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  articles = this.http.get('https://angular-connect.rangleu.io/blogs');
  constructor(private http: HttpClient) {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  // templateUrl: './article.component.html',
  template: `
    <h3>Article Title</h3>
    <p *ngIf="author">{{ author }}</p>
    <p>{{ articleDate | date }}</p>
    <div>{{ body }}</div>
  `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  author = 'Michael B.';
  articleDate = new Date(2019, 8, 29, 12);
  body = 'Lorem Ipsem, etc, etc, etc';
  constructor() { }

  ngOnInit() {
  }

}

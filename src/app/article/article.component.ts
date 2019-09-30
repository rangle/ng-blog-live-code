import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  // templateUrl: './article.component.html',
  template: `
    <div *ngIf="article">
      <h3>{{ article.title }}</h3>
      <p *ngIf="article.author">{{ article.author }}</p>
      <p>{{ article.date | date }}</p>
      <div>{{ article.body }}</div>
    </div>
  `,
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  constructor() {}

  ngOnInit() {}
}

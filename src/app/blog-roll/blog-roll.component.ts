import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-roll',
  template: `
    <ul>
      <li *ngFor="let article of articles">
        <app-article-item (onClick)="selectedArticle.emit($event)"  [article]="article"></app-article-item>
      </li>
    </ul>
  `,
})
export class BlogRollComponent {

  @Input() articles: any;
  @Output() selectedArticle = new EventEmitter();

  sayHello(article: any) {
    console.log(article);
  }


  onClick(article: any) {
    alert(article.title + ', ' + article.author);
  }
}

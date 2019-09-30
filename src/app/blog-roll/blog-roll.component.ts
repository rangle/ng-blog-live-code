import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-roll',
  template: `
    <ul>
      <li
        (click)="onClick(article)"
        *ngFor="let article of articles"
      >
        {{ article }}
      </li>
    </ul>
  `,
})
export class BlogRollComponent {
  articles = [
    'New Spaceship',
    'Why Solar Panels',
    'How to write Angular',
    'Components what?',
    'Front End JS in a Nutshell',
  ];

  onClick(article: string) {
    alert(article);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: any;
  @Output() onClick = new EventEmitter();

  constructor() {
  }
  ngOnInit() {}
}

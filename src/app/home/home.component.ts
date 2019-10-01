import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedArticle: any;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    if (this.fetchService.articles.length) {
      this.selectedArticle = this.fetchService.articles[0];
    }
  }

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
}

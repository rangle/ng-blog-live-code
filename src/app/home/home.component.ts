import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedArticle: any;

  constructor() {}

  articles = [
    {
      author: 'Michael B.',
      body:
        'Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....Lorem Ipsum Etc....',
      date: new Date(2018, 1, 2),
      title: 'New Spaceship',
    },
    {
      author: 'Laura T.',
      body:
        'Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz Foo bar baz ',
      date: new Date(2019, 3, 1),
      title: 'How to fix a backend',
    },
    {
      author: 'Bill D.',
      body:
        'Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello Thing1, haha, hello ',
      date: new Date(2017, 11, 1),
      title: 'Bill\'s Post',
    },
    {
      author: '',
      body: 'Body of a blog',
      date: new Date(2016, 3, 2),
      title: 'How to write blogs',
    },
    {
      author: 'Jane D.',
      body: 'Some text and content etc',
      date: new Date(2019, 3, 12),
      title: 'Knowledge sharing',
    },
  ];

  ngOnInit() {
    if (this.articles.length) {
      this.selectedArticle = this.articles[0];
    }
  }

  displaySelectedArticle(article: any) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
  }
}

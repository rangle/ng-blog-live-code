import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

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

  constructor() { }
}

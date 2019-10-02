import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  store: any;
  state = {
    selectedArticleId: 0,
    articles: [
      {
        title: 'My Post',
        author: 'Jo',
        date: new Date(2019, 11, 10),
        body: 'Lorem Ipsum'
      }
    ],
  };

  onClick() {
    this.store.dispatch({
      type: 'addArticle',
      payload: {
        title: 'My Post II',
        author: 'Jo II',
        date: new Date(2019, 11, 10),
        body: 'Lorem Ipsum II'
      },
    });
  }

  constructor() {
    this.store = new Store(this.state, (state, action) => {
      switch (action.type) {
        case 'addArticle':
          state.articles.push(action.payload);
          return state;
        default:
          return state;
      }
    });

    this.store.subscribe((state) => {
      this.state = state;
    });
  }
}

class Store {
  private states: any[];
  private subscribers = [];

  constructor(state = {}, reducer: any) {
    this.states = [state];
    this.reducer = reducer;
  }

  public dispatch(action: any) {
    const newState = this.reducer(this.states[0], action);
    this.subscribers.forEach((callback) => {
      callback(newState);
    });
    this.states.unshift(newState);
  }
  private reducer(state: any, action: any) {
  }
  public subscribe(onUpdate) {
    this.subscribers.push(onUpdate);
  }
}

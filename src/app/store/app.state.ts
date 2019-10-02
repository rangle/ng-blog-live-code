import { DataArticle } from '../fetch.service';

export interface AppState {
  selectedArticle: any;
  didError: boolean;
  articles: DataArticle[];
}

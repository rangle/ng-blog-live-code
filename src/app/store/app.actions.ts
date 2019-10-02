import { Action } from '@ngrx/store';

export const GET_ARTICLES = '[APP] Get Articles';
export const GET_ARTICLES_SUCCESS = '[APP] Get Articles Success';
export const GET_ARTICLES_FAILURE = '[APP] Get Articles Error';

export const SELECT_ARTICLE = '[APP] Select Article';
export const ADD_ARTICLE = '[App] Add Article';

export class AddArticleAction implements Action {
  readonly type = ADD_ARTICLE;
  constructor(public payload: any) {}
}

export class SelectArticleAction implements Action {
  readonly type = SELECT_ARTICLE;
  constructor(public payload: any) {}
}
export class GetArticlesAction implements Action {
  readonly type = GET_ARTICLES;
}

export class GetArticlesSuccessAction implements Action {
  readonly type = GET_ARTICLES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetArticlesFailureAction implements Action {
  readonly type = GET_ARTICLES_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | GetArticlesAction
  | GetArticlesSuccessAction
  | GetArticlesFailureAction
  | SelectArticleAction
  | AddArticleAction;

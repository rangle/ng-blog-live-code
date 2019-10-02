import { Action } from '@ngrx/store';

export const GET_ARTICLES = '[APP] Get Articles';
export const GET_ARTICLES_SUCCESS = '[APP] Get Articles Success';
export const GET_ARTICLES_FAILURE = '[APP] Get Articles Error';

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

export type All = GetArticlesAction | GetArticlesSuccessAction | GetArticlesFailureAction;

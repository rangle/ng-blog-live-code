import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  getArticles$: Observable<Action> = this.actions$.pipe(
    ofType(AppActions.GET_ARTICLES),
    mergeMap((action: AppActions.All) =>
      this.http.get('https://angular-connect.rangleu.io/blogs').pipe(
        map(data => ({ type: AppActions.GET_ARTICLES_SUCCESS, payload: data })),
        catchError(error => of({ type: AppActions.GET_ARTICLES_FAILURE, payload: error.error })),
      ),
    ),
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}

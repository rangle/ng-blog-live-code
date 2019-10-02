import { AppState } from './app.state';
import * as AppActions from './app.actions';

export function appReducer(
  state: AppState = {
    articles: [],
    selectedArticle: undefined,
    didError: false,
  },
  action: AppActions.All,
) {
  console.log(action);
  switch (action.type) {
    case AppActions.GET_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, selectedArticle: action.payload[0] };

    case AppActions.SELECT_ARTICLE:
      return { ...state, selectedArticle: action.payload };

    default:
      return state;
  }
}

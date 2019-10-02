import { AppState } from './app.state';
import * as AppActions from './app.actions';

export function appReducer(
  state: AppState = {
    title: '',
    articles: [],
  },
  action: AppActions.All,
) {
  console.log(action);
  switch (action.type) {
    case AppActions.GET_ARTICLES_SUCCESS:
      const s = { ...state, articles: action.payload };
      console.log(s);
      return s;

    default:
      return state;
  }
}

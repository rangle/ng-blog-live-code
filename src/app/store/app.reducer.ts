import { AppState } from './app.state';
import * as AppActions from './app.actions';

const INITIAL_STATE = {
  articles: [],
  selectedArticle: undefined,
  didError: false,
};

export function appReducer(state: AppState = INITIAL_STATE, action: AppActions.All) {
  console.log(action);
  switch (action.type) {
    case AppActions.GET_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, selectedArticle: action.payload[0] };

    case AppActions.SELECT_ARTICLE:
      return { ...state, selectedArticle: action.payload };

    case AppActions.ADD_ARTICLE:
      const newState = {
        ...state,
        articles: [].concat(state.articles, action.payload),
        selectedArticle: action.payload,
      };
      return newState;

    default:
      return state;
  }
}

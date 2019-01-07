import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/comments';

const defaultState = { comments, posts };

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

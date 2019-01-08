import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = { comments, posts };

// Activate Redux Dev Tools
const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

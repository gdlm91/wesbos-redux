import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router historyObject={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:photoId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.querySelector('#root'));

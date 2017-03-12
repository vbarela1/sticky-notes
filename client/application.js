import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router/es6';
import routes from './routes';
import { Provider } from 'react-redux';
import store, { history } from './store';
import 'babel-polyfill';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

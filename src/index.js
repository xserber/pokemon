import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import Router from './Router';

import './sass/main.scss';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

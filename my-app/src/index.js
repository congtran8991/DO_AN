import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './components/test'
import AcademicManagement from './components/academicManagement';
import AssessKnowledge from './components/assessKnowledge';
import Login from './components/login';
import Header from './components/header';
import Router from './components/appRouter';
import {createStore,applyMiddleware,compose} from 'redux';
import appReducers from './reducers'
import CreateTest from './components/createTest';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (
  appReducers,
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

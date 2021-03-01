import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/fact-reducer';
import middlewareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

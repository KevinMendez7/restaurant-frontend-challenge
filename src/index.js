import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './_reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducer,  
  composeWithDevTools(
    applyMiddleware(
      // logger,
      thunk
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>      
      <App />      
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
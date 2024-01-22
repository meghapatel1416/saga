import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store/store';
import Counter from './Counter';
import UserData from './UserData';
import { Provider } from 'react-redux';
import Connect from './Connect';
import Counter2 from './Counter2';
// import Counter3 from './Counter3';
//3 different method in counter,counter2,counter3,connect
import ListTutotorial from './ListTutotorial';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <Counter2 />
  //   </Provider>
  // </React.StrictMode>
  <ErrorBoundary>  
  <Provider store={store}>

        <ListTutotorial/>

  </Provider>

  <BuggyCounter/>

  </ErrorBoundary>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

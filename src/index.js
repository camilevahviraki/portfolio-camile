import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'redux';
// import Store from './redux/Store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={Store}>
  <App />,
  // </Provider>,
);

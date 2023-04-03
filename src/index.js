import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProjectPopUp from './pages/projects/projectPopUp';
import Store from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project/popUp" element={<ProjectPopUp />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

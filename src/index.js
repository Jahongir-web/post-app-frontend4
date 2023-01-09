import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./Index.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';

import { InfoProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <InfoProvider>
        <App />
      </InfoProvider>
    </BrowserRouter>
  </>
);



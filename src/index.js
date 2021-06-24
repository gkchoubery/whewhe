import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderComponent from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <main>
      <App />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
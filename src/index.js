import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
// import 'animate.css/animate.css';
// local imports
import './styles/index.scss';
import App from './App';

// attach react to the page
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

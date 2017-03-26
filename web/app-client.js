import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about/About';

window.onload = () => {
  ReactDOM.render(<About />, document.getElementById('react_root'));
};
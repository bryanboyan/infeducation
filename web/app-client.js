import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about/About';

window.onload = () => {
  ReactDOM.render(
    <div data-reactroot="">
      <About />
    </div>,
    document.getElementById('react-root'),
  );
};
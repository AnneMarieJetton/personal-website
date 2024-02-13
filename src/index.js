//-------Files-----------
import './index.css';
import MobileWarningMessage from './js-files/MobileWarningMessage.js';
import App from './App';

//-------Other-----------
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

ReactDOM.render(
  <React.StrictMode>
    {isMobile ? <MobileWarningMessage /> : <App />}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


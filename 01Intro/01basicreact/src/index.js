import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    // render - the process of converting code into viewable
  // StrictMode is imp as well as not imp
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);


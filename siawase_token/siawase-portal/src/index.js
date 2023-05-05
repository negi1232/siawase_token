import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("hello world");
root.render(
  <>  
  {console.log(process.env.PUBLIC_URL)}
  <React.StrictMode>

    {console.log(process.env.PUBLIC_URL)}
    <h1>Hello, world!!</h1>
      <App />
  </React.StrictMode>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

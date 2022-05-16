import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import BroswerRoute from 'react-router-dom';

ReactDom.render(
  <>
    <div >
      <h1>
        Hello Bro ,<span > ye</span>
      </h1>
     {/* <BroswerRoute> <App/></BroswerRoute> */}
     <App/>
    </div>
  </>,
  document.getElementById("root")
);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FormGenerator from "./Components/FormGenerator";

ReactDOM.render(
  <React.StrictMode>
      <div className={"container-sm"}>
          <h1 className={"text-center"}>Generador</h1>
          <hr/>
          <FormGenerator />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

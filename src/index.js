import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App' // Remove the curly braces here
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

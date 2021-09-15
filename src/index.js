import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App";
import { ProvideAuth } from "./hooks/useAuth.hook";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <Router>
        <App />
      </Router>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

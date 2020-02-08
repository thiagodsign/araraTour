import React from "react";
import ReactDOM from "react-dom";
import "./estilos/index.scss";
import App from "./inicio/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

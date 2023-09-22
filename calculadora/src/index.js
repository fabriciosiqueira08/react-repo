import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculadora from "./main/Calculadora";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Calculadora</h1>
    <React.StrictMode>
      <Calculadora />
    </React.StrictMode>
  </div>
);

reportWebVitals();

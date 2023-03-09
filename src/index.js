import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./context/SearchProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>

      <App />
    </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

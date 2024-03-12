import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import { BrowserRouter } from "react-router-dom";

import App from "./pages/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found in the document");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

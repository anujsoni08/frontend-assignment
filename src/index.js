import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

const container = document.getElementById("root");
if (container) {
  ReactDOM.createRoot(container).render(<App />);
} else {
  console.error("Could not find the root element");
}

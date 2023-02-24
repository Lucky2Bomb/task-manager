import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const rootNode = document.getElementById("app");

if (rootNode != null) {
  createRoot(rootNode).render(<App />);
} else {
  alert("<div id='app'> not founded");
}

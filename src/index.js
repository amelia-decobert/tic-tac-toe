// Enables additional checks and warnings during development
import { StrictMode } from "react";
// React library that interacts with the web browser
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
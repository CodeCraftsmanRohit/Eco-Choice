import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AdminContextProvider } from "./context/AdminContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </React.StrictMode>
);

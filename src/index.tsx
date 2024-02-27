import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

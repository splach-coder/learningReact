import React from "react";
import ReactDOM from "react-dom/client";
import { Header, H1, Footer } from "./challenge2";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <H1 />
    <Footer />
  </React.StrictMode>
);

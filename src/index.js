import "./style.css";
import react from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";



const root = createRoot(document.getElementById("root"));

root.render(
  <App />);

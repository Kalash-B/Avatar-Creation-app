import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import './index.css'
import App from './App.jsx'
import { AvatarProvider } from "./context/AvatarContext";


ReactDOM.render(
  <AvatarProvider>
    <App />
  </AvatarProvider>,
  document.getElementById("root"));

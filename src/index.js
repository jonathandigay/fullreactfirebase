import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { AuthProvider } from "./context/AuthContext";
import { TodoContextProvider } from "./context/TodoContext";
import { GalleryContextProvider } from "./context/GalleryContext";
import "./styles/global.scss";
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <TodoContextProvider>
        <GalleryContextProvider>
          <App />
        </GalleryContextProvider>
      </TodoContextProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

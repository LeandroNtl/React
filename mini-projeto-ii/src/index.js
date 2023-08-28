import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Router from "./routes/router"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
  }
`;


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
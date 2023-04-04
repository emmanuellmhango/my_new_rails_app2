// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Theme/globalStyles'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

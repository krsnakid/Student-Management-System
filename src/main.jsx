import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import React from 'react'; // Make sure to import React
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

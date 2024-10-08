import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from "react-router-dom";

import './styles.css';
import { HeroesApp } from './HeroesApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)

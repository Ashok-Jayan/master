import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './Navbar/Navbar.jsx';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { BrowserRouter, Router } from 'react-router';
import Footer from './Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)

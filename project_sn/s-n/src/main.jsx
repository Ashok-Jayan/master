import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import App from './App.jsx';
import './scss/styles.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <App />
    </BrowserRouter>
  </StrictMode>
)

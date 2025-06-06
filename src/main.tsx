// src/main.jsx or src/main.tsx - UPDATED
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext.jsx'; // 👈 IMPORT THE CART PROVIDER

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* 👈 WRAP YOUR APP WITH THE PROVIDER */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
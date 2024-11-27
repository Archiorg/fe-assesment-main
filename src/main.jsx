import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { CartProvider } from './store/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
<CartProvider>
    <App />
</CartProvider>,
);
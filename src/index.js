import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth"
import AddItems from './routes/AddItems';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="auth" element={<Auth />} />
        <Route path="additems" element={<AddItems />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

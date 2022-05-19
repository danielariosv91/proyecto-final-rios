import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';

const firebaseConfig = {
  apiKey: "AIzaSyDu9WE2RTbZQae46jeRjMGtypHXCLuRvfI",
  authDomain: "proyecto-final-rios.firebaseapp.com",
  projectId: "proyecto-final-rios",
  storageBucket: "proyecto-final-rios.appspot.com",
  messagingSenderId: "407603013126",
  appId: "1:407603013126:web:a26e0030489146113c0587"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

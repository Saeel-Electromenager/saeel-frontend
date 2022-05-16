import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profil from './pages/Profil';
import AddProduct from './components/AddProduct';
import Product from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/profil/:idUser" element={<Profil />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:idProduct" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

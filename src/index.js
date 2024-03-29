import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profil from './pages/Profil';
import AddProduct from './pages/AddProduct';
import Search from './pages/Search.jsx';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import TopSaeel from './pages/TopSaeel';
import NewProducts from './pages/NewProducts';
import PdfComponent from './components/PdfComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/user/:idUser" element={<Profil />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/product/:idProduct" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/top-saeel" element={<TopSaeel />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard/addproduct" element={<AddProduct />}></Route>
        <Route path="/new-product" element={<NewProducts />}></Route>
        <Route path="/pdf" element={<PdfComponent />}></Route>
        <Route
          path="/search/:searchCategory/:searchKey"
          element={<Search />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

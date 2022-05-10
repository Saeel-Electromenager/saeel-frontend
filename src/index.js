import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Register from './pages/Register';
import  Login  from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

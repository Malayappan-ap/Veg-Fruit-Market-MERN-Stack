// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProductList from './components/ProductList';
import Header from './components/Header';
import PaymentPage from './components/PaymentPage'; // Ensure this file exists
import Cart from './components/Cart'; // Add Cart page
import './App.css';
import CustomItemContext from './context/ItemContext';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';

const App = () => {
  return (
    <CustomItemContext>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </CustomItemContext>
  );
};

export default App;

// src/components/Header.js
import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { itemsInCart } = useContext(itemContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>Fresh Fruit & Vegetable Market</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({itemsInCart}) {/* Display cart item count */}
        </Link>
        <Link to="/payment">Payment</Link>
      </div>
    </header>
  );
};

export default Header;

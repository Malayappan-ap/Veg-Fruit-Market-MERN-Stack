// src/components/Cart.js
import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(itemContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
              <div className="cart-item-details">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-price">
            <p>Total Price: ₹{totalPrice}</p>
          </div>
          <Link to="/payment">
            <button className="buy-now-button">Proceed to Payment</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

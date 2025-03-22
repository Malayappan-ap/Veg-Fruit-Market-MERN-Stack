import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
  const { products, addToCart } = useContext(itemContext);

  return (
    <div>
      <Header />
      <div className="home-page">
        <h2>Welcome to My Shop</h2>
        <div className="product-list">
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

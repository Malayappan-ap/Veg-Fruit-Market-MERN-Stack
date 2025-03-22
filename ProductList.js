import React, { useState, useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, totalPrice } = useContext(itemContext);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  // Filter products based on category and price
  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === '' || product.type === categoryFilter) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div className="product-list">
      {/* Filters Section */}
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter-category">
          <label>Category: </label>
          <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
            <option value="">All</option>
            <option value="Fruit">Fruits</option>
            <option value="Vegetable">Vegetables</option>
          </select>
        </div>
        <div className="filter-price">
          <label>Price Range: </label>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          -
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Product Items Section */}
      <div className="product-items">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => <ProductItem key={product._id} product={product} />)
        )}
      </div>

      {/* Total Price and Checkout Section */}
      <div className="buy-now">
        <h3>Total Price: ₹{totalPrice}</h3>
        <Link to="/payment">
          <button className="buy-now-button">Proceed to Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;

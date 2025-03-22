import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(itemContext);

  const handleAddToCart = () => {
    addToCart(product); // Adds product to the cart
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product); // Removes product from the cart
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <div className="buttons">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;

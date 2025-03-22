import React, { useContext, useState } from 'react';
import { itemContext } from '../context/ItemContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const { cart, totalPrice } = useContext(itemContext);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayNow = () => {
    // Simple validation
    if (!name || !email || !cardNumber || !expiryDate || !cvv) {
      setErrorMessage('Please fill all fields!');
      return;
    }

    // Validate card number (16 digits)
    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumber.match(cardNumberRegex)) {
      setErrorMessage('Card number must be 16 digits!');
      return;
    }

    // Validate CVV (3 digits)
    const cvvRegex = /^[0-9]{3}$/;
    if (!cvv.match(cvvRegex)) {
      setErrorMessage('CVV must be 3 digits!');
      return;
    }

    // If all is valid, proceed with payment
    setErrorMessage('');
    setSuccessMessage('Thank you for your purchase! Payment successful.');
  };

  // Function to mask the card number as the user types
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    let masked = value.slice(-4); // Show last 4 digits
    if (value.length > 4) {
      masked = '*'.repeat(value.length - 4) + masked;
    }
    setCardNumber(masked);
  };

  return (
    <div className="payment-page">
      {/* Left Section - Cart Items and Total Price */}
      <div className="payment-summary">
        <h4>Your Cart</h4>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-details">
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="total-price">
          <p>Total Price: ₹{totalPrice}</p>
        </div>
      </div>

      {/* Right Section - Payment Form */}
      <div className="payment-form">
        <h4>Payment Information</h4>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your card number"
          maxLength="16"
          value={cardNumber}
          onChange={handleCardNumberChange} // Mask as user types
        />
        <input
          type="text"
          placeholder="MM/YY Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your card CVV"
          maxLength="3"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button onClick={handlePayNow}>Pay Now</button>

        {/* Error and Success Messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      {/* Display Masked Card Number (For Demo) */}
      {cardNumber && (
        <div className="card-display">
          <h4>Card Number: {cardNumber}</h4>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

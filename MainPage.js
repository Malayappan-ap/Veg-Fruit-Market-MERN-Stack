import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Add this CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="overlay">
        <h1>Welcome to Fresh Market</h1>
        <p>Your one-stop shop for fresh fruits and vegetables</p>
        <div className="buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

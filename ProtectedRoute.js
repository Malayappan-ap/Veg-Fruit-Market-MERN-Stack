// client/src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = true; // Replace with actual authentication logic

	return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

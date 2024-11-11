/* eslint-disable react/prop-types */
// src/context/AuthContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirects

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // To redirect if the user is not authenticated

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('https://mern-blog-backend-mbdx.onrender.com/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // Successfully fetched user data, set the user state
          setUser(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Token might be invalid or expired, logout the user
          localStorage.removeItem('token'); // Remove the invalid token
          setUser(null); // Set user to null
          navigate('/login'); // Redirect to login page
        });
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

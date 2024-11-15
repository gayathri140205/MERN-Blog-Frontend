/* eslint-disable react/prop-types */
// src/context/AuthContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('https://mern-blog-backend-mbdx.onrender.com/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          localStorage.removeItem('token');
          setUser(null);
          navigate('/login');
        });
    }
  }, [navigate]);

  const saveRedirectPath = (path) => {
    localStorage.setItem('redirectAfterAuth', path);
  };

  const getRedirectPath = () => {
    const path = localStorage.getItem('redirectAfterAuth') || '/';
    localStorage.removeItem('redirectAfterAuth');
    return path;
  };

  return (
    <AuthContext.Provider value={{ user, setUser, saveRedirectPath, getRedirectPath }}>
      {children}
    </AuthContext.Provider>
  );
};

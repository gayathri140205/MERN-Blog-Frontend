// src/components/Login.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('https://mern-blog-backend-mbdx.onrender.com/api/auth/login', { email, password })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token); // Store token in localStorage
        setUser(response.data.user); // Set the user in the AuthContext
        alert('Login successful!'); // Display success alert
        navigate('/'); // Redirect to home page
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
        alert('Login failed. Please check your credentials.'); // Display error alert
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

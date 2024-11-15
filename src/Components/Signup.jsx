// src/components/Signup.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import '../styles/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { getRedirectPath } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post('https://mern-blog-backend-mbdx.onrender.com/api/auth/signup', { name, email, password })
      .then(() => {
        alert('Signed up successfully!');
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
        alert('Signup failed. Please try again.');
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

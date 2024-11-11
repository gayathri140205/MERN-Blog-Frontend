// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post('https://mern-blog-backend-mbdx.onrender.com/api/auth/signup', { name, email, password })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        navigate('/login');  // Use navigate() to redirect
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
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

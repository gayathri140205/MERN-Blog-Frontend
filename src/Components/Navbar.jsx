// src/components/Navbar.js
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateBlogClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent default Link behavior
      alert('Please sign up first.');
      navigate('/signup'); // Redirect to signup page if not signed in
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user ? (
          <>
           
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <li>Welcome, {user.name}</li>
        )}
        <li>
          <Link to={user ? '/create' : '#'} onClick={handleCreateBlogClick}>
            Create Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

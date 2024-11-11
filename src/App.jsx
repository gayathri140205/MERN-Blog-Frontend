// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
import { AuthProvider } from './context/AuthContext';  // Your AuthProvider
import Navbar from './Components/Navbar';  // Navbar Component
import Home from './pages/Home';  // Home page component
import Login from './Components/Login';  // Login component
import Signup from './Components/Signup';  // Signup component
import CreateBlog from './Components/CreateBlog';  // Create Blog component
import './styles/styles.css';
const App = () => {
  return (
    <Router> {/* Wrap your app in BrowserRouter */}
      <AuthProvider> {/* Wrap the app in AuthProvider */}
        <Navbar /> {/* Display Navbar */}
        <Routes> {/* Routing setup */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

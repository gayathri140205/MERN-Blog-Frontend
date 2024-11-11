// src/components/CreateBlog.js
// eslint-disable-next-line no-unused-vars
import  React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../context/AuthContext.jsx';

const CreateBlog = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleCreateBlog = (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please log in to create a blog');
      return;
    }

    axios
      .post(
        'https://mern-blog-backend-mbdx.onrender.com/api/blogs/create',
        { title, content },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleCreateBlog}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;

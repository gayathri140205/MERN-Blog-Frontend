// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogCard"; // Make sure the path is correct

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-blog-backend-mbdx.onrender.com/api/blogs')  // Use correct API endpoint
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
    <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>The Ink Journal</h1>

      <div className="blog-cards">
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />  // Ensure correct data passing
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

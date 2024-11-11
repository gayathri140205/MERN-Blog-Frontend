// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Delete blog from UI
  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  // Update blog in UI (directly without backend request)
  const updateBlog = (id, updatedData) => {
    setBlogs(
      blogs.map((blog) =>
        blog._id === id ? { ...blog, ...updatedData } : blog
      )
    );
  };

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          onDelete={deleteBlog}
          onUpdate={updateBlog}
        />
      ))}
    </div>
  );
};

export default BlogList;

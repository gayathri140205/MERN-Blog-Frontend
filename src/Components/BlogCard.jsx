/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const BlogCard = ({ blog, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(blog.title);
  const [updatedContent, setUpdatedContent] = useState(blog.content);

  // Handle the deletion of the card
  const handleDelete = () => {
    onDelete(blog._id); // Remove from parent component (UI update)
  };

  // Toggle the edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save the updated blog (without backend request)
  const handleSave = () => {
    // Directly update the parent component's state (UI update)
    onUpdate(blog._id, { title: updatedTitle, content: updatedContent });
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="blog-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{updatedTitle}</h3>
          <p>{updatedContent}</p>
        </div>
      )}
      <span>{blog.author}</span>
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogCard;

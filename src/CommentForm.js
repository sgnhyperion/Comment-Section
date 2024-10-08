import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      alert("Both name and comment are required.");
      return;
    }
    if (name.trim() && commentText.trim()) {
      addComment({
        name,
        text: commentText,
        date: new Date().toISOString(),
      });
      setName('');
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form clearfix">
      <h2>Comment</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        id='name'
      />
      <textarea
        placeholder="Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        required
        id='comment'
      />
      <button type="submit">POST</button>
    </form>
  );
}

export default CommentForm;
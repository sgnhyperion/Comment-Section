import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        required
      />
      <button type="submit">POST</button>
    </form>
  );
}

export default CommentForm;
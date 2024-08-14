import React, { useState } from 'react';

function ReplyForm({ addReply, onReplyPosted }) {
  const [name, setName] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !replyText.trim()) {
      alert("Both name and comment are required.");
      return;
    }
    if (name.trim() && replyText.trim()) {
      addReply({
        name,
        text: replyText,
        date: new Date().toISOString(),
        replies: [],
      });
      setName('');
      setReplyText('');
    }
    onReplyPosted();
  };

  return (
    <form onSubmit={handleSubmit} className="reply-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Reply"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        required
      />
      <button type="submit">POST</button>
    </form>
  );
}

export default ReplyForm;
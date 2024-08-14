import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (newComment) => {
    setComments([...comments, { ...newComment, id: Date.now(), replies: [] }]);
  };

  const sortComments = () => {
    const sorted = [...comments].sort((a, b) => new Date(b.date) - new Date(a.date));
    setComments(sorted);
  };

  return (
    <div className="App">
      <CommentForm addComment={addComment} />
      <button className="sort-btn" onClick={sortComments}>Sort by Date and Time</button>
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
}

export default App;
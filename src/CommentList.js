import React from 'react';
import Comment from './Comment';

function CommentList({ comments, setComments }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          comments={comments}
          setComments={setComments}
          isReply={false}
        />
      ))}
    </div>
  );
}

export default CommentList;
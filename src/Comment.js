import React, { useState } from 'react';
import ReplyForm from './ReplyForm';
import { format } from 'date-fns';
import { AiTwotoneDelete } from "react-icons/ai";

function Comment({ comment, comments, setComments, isReply = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [showReplyForm, setShowReplyForm] = useState(false);

  
  const handleSave = () => {
    setComments(
      comments.map((c) =>
        c.id === comment.id ? { ...c, text: editedText } : c
      )
    );
    setIsEditing(false);
  };
  
  const handleDelete = () => {
    setComments(comments.filter((c) => c.id !== comment.id));
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const addReply = (newReply) => {
    setComments(
      comments.map((c) =>
        c.id === comment.id
          ? { ...c, replies: [...c.replies, { ...newReply, id: Date.now() }] }
          : c
      )
    );
  };

  return (
    <div className={isReply ? "reply" : "comment"}>
      <h3>{comment.name}</h3>
      <span className="comment-date">{format(new Date(comment.date), 'dd MMM yyyy')}</span>
      {isEditing ? (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <p>{comment.text}</p>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button className="delete-btn" onClick={handleDelete}>
      <AiTwotoneDelete />
      </button>
      {!isReply && (
        <>
          <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
          {showReplyForm && (
            <ReplyForm
              addReply={addReply}
              onReplyPosted={() => setShowReplyForm(false)}
            />
          )}
        </>
      )}
      {comment.replies && comment.replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          comments={comment.replies}
          setComments={(newReplies) =>
            setComments(
              comments.map((c) =>
                c.id === comment.id ? { ...c, replies: newReplies } : c
              )
            )
          }
          isReply={true}
        />
      ))}
    </div>
  );
}

export default Comment;
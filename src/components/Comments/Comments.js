import React from 'react';
import './Comments.css';

const Comments = (props) => {
  const comments = props.comments.map(comment => {
    return (
      <li className="media">
        <a href="#" className="pull-left">
          <img src={comment.author.photo} alt="avatar" className="img-circle" />
        </a>
        <div className="media-body">
          <span className="text-muted pull-right">
            <small className="text-muted">{comment.commentDate}</small>
          </span>
          <strong className="author-name">{comment.author.username}</strong>
          <p>{comment.content}</p>
        </div>
      </li>
    )
  })

  return (
    <ul className="media-list">
      {comments}
    </ul>
  )
}

export default Comments;
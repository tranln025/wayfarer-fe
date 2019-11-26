import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import './Posts.css';

const Posts = (props) => {
  const posts = props.posts.map(post => {
    return (
      <div key={post._id} className="card mb-3">
        <Link style={{ textDecoration: 'none' }} to={`/post/${post._id}`}>

        <div className="photo-container">
          <img src={post.photo} className="card-img-top" alt={post.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.city.name}</p>
          <p className="card-text"><small className="text-muted">{post.date}</small></p>
        </div>
        </Link>
  
      </div>
    )
  })

  return (
    <div className="container mt-4">
      <div className="row">
        {posts}
      </div>
    </div>
  )
}

export default withRouter(Posts);
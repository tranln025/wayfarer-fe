import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const Posts = (props) => {
  console.log("props.posts>>>> ", props.posts); // []

  const posts = props.posts.map(post => {
    return (
      <div key={post._id} className="card mb-3">
        <img src={post.photo} className="card-img-top" alt={post.title} />
        <div className="card-body">
        <Link to={`/post/${post._id}`}>
          <h5 className="card-title">{post.title}</h5>
        </Link>
          <p className="card-text">{post.city.name}</p>
          <p className="card-text"><small className="text-muted">{post.date}</small></p>
        </div>  
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
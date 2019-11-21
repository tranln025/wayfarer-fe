import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Posts = props => {
  console.log(props);

  const posts = props.posts.map(post => {
    
    return (
      // Uncomment once placeholder api is replaced with data
      // <div key={post.id} className="card mb-3">
      //   <img src={post.photo} className="card-img-top" alt={post.title} />
      //   <div className="card-body">
      //     <h5 className="card-title">{post.title}</h5>
      //     <p className="card-text">{post.city}</p>
      //     <p className="card-text"><small className="text-muted">{post.date}</small></p>
      //   </div>  
      // </div>
        
          <div key={post.id} className="card mb-3">
            <img src="https://picsum.photos/500/200" className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text"><small className="text-muted">{post.id}</small></p>
            </div> 
            <Link to={`/post/${post.id}`}>
              <button>big boi button</button>
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
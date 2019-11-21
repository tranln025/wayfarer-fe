import React from 'react';
import './Post.css';

const Post = (props) => {
  return(
    <div>
      <div className="hero">
        <img src="https://www.usnews.com/dims4/USNEWS/3e2b4ba/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fbb%2Fc8%2F59c40cdd4cacbc74086e09589bff%2F1064-the-bay-lights-3-james-ewing.jpg" alt="hero"/>
      </div>
      <div className="post-info">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis, voluptatum quia voluptas saepe dolorem?</p>
        <h4>Author</h4>
      </div>
    </div>
  )

};

export default Post;
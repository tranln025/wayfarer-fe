import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import './PostPreview.css'


const PostPreview = (props) => {
    let textPreview = props.article.content.split(' ').slice(0,30).join(' ') + "...";
    return (
        <div className="row post-preview">
            <div className="col">
                <Link style={{ textDecoration: 'none' }} to={"/post/" + props.article._id}><div className="post-preview-container">
                    <div className="post-preview-content row">
                        <div className="avatar-container-post-preview">
                            <img src={props.article.author.photo} alt="article" />
                        </div>
                        <div className="post-preview-info">
                            <h4>{props.article.title}</h4>
                            <Truncate charcters={1000} ellipsis={<span>... <a href='/link/to/article'>Read more</a></span>}>
                                <p>{textPreview}</p>
                            </Truncate>
                        </div>
                    </div>
                </div></Link>
            </div>
        </div>
    )
};

export default PostPreview;
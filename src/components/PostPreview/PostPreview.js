import React from 'react';
import { Link } from 'react-router-dom';

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
                            <p>{textPreview}</p>
                        </div>
                    </div>
                </div></Link>
            </div>
        </div>
    )
};

export default PostPreview;
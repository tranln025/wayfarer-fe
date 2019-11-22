import React from 'react';
import axios from 'axios';

const Article = (props) => {

    // let name = '';

    // const getUserName = (id) => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/users?id=${id}`).then((res)=>{
            
    //         console.log("!!!!!!");
    //         console.log(res);

    //         name = res.data.data;
    //     }).catch((err)=>console.log(err));
    //     console.log(name)
    //     return name.name
    // }

    return(
        <div>
            <h3>{props.article.title}</h3>
            {/* <p>{props.article.author}</p> */}
            <p>{props.article.author.username}</p>
            <p>{props.article.postDate}</p>
            <p>{props.article.content}</p>
        </div>
    )
}

export default Article;
import React, {useContext} from 'react'

import PostDetailContext from '../../contexts/PostDetailContext'

function RenderPost() {

    const post = useContext(PostDetailContext)

    return (
        <div>
            <h1>Post</h1>
            <p>{post.username}</p>
            <p>{post.title}</p> 
            <p>{post.text} </p>
            <p>{post.votesCount}</p> 
            <p>{post.commentsCount}</p>
        </div>
    )
}

export default RenderPost
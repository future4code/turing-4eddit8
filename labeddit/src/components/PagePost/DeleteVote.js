import React, {useContext} from 'react'

import PostDetailContent from '../../contexts/PostDetailContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

function DeleteVote(props) {

    const post = useContext(PostDetailContent)
    const requestVoteComment = useContext(RequestVoteCommentContext)

    const onClickDeleteVote = () => {

        const body = {
            direction: 0
        }

        const commentId = props.commentId

        const postId = post.id

        requestVoteComment(body, postId, commentId)

    }

    return (
        <div>
            <button onClick={onClickDeleteVote}>0</button>
        </div>
    )
}

export default DeleteVote
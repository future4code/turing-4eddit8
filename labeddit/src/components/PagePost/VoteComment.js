import React, { useContext } from 'react'

import PostDetailContent from '../../contexts/PostDetailContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

function VoteComment(props) {

    const post = useContext(PostDetailContent)
    const requestVoteComment = useContext(RequestVoteCommentContext)

    const onClickGostei = () => {
        const body = {
            direction: 1
        }

        const commentId = props.commentId

        const postId = post.id

        requestVoteComment(body, postId, commentId)
    }

    const onClickNaoGostei = () => {
        const body = {
            direction: -1
        }

        const commentId = props.commentId

        const postId = post.id

        requestVoteComment(body, postId, commentId)
    }

    return (
        <div>
            <button onClick={onClickGostei}>↑</button>
            <button onClick={onClickNaoGostei}>↓</button>
        </div>
    )
}

export default VoteComment
import React, { useContext } from 'react'

import PostDetailContent from '../../contexts/PostDetailContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

function VoteComment(props) {

    const post = useContext(PostDetailContent)
    const requestVoteComment = useContext(RequestVoteCommentContext)

    const onClickGostei = () => {
        if (props.commentVoteDirection !==1) {
            const body = {
                direction: 1
            }
            const commentId = props.commentId

            const postId = post.id

            requestVoteComment(body, postId, commentId)
        } else {
            onClickDeleteVote()
        }    
    }

    const onClickNaoGostei = () => {
        if (props.commentVoteDirection !== -1) {
            const body = {
                direction: -1
            }
    
            const commentId = props.commentId
    
            const postId = post.id
    
            requestVoteComment(body, postId, commentId)
        } else {
            onClickDeleteVote()
        }  
    }

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
            <button onClick={onClickGostei}>↑</button>
            <button onClick={onClickNaoGostei}>↓</button>
        </div>
    )
}

export default VoteComment
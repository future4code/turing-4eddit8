import React, {useReducer, useContext} from 'react'
import axios from 'axios'
import {baseUrl} from '../PageLogin/PageLogin'
import PostDetailContent from '../../contexts/PostDetailContext'

function VoteComment(props) {

    const post = useContext(PostDetailContent)

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
            direction: 0
        }

        const commentId = props.commentId

        const postId = post.id

        requestVoteComment(body, postId, commentId)
    }

    const requestVoteComment = (body, postId, commentId ) => {
        const token = window.localStorage.getItem("token")

        axios.put(`${baseUrl}posts/${postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Você votou")
            props.requestDetailPost()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div>
            <button onClick={onClickGostei}>Gostei</button>
            <button onClick={onClickNaoGostei}>Não gostei</button>
        </div>
    )
}

export default VoteComment
import React, { useContext } from 'react'
import axios from 'axios'
import { baseUrl } from '../PageLogin/PageLogin'
import PostDetailContent from '../../contexts/PostDetailContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'

function VoteComment(props) {

    const post = useContext(PostDetailContent)
    const request = useContext(RequestDetailPostContext)

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
            request()
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
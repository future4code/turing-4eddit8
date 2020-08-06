import React, { useContext } from 'react'
import axios from 'axios'

import { baseUrl } from '../PageLogin/PageLogin'

import PostDetailContext from '../../contexts/PostDetailContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'

function RenderPost() {

    const post = useContext(PostDetailContext)
    const requestDetailPostContext = useContext(RequestDetailPostContext)

    const requestVotePost = (body, idPost) => {
        const token = window.localStorage.getItem("token")

        axios.put(`${baseUrl}posts/${idPost}/vote`, body, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            requestDetailPostContext()
        })
        .catch((err) => {
            alert(err.message)
        })

    }

    const onClickGostei = () => {
        const body = {
            direction: 1
        }
        const idPost = post.id

        requestVotePost(body, idPost)
    }

    const onClickNaoGostei = () => {
        const body = {
            direction: -1
        }
        const idPost = post.id
        requestVotePost(body, idPost)
    }

    const onClickDeleteVote = () => {
        const body = {
            direction: 0
        }
        const idPost = post.id
        requestVotePost(body, idPost)
    }

    return (
        <div>
            <h1>Post</h1>
            <p>{post.username}</p>
            <p>{post.title}</p> 
            <p>{post.text} </p>
            <p>{post.votesCount}</p> 
            <p>{post.commentsCount}</p>
            <button onClick={onClickGostei}>↑</button>
            <button onClick={onClickDeleteVote}>0</button>
            <button onClick={onClickNaoGostei}>↓</button>
        </div>
    )
}

export default RenderPost
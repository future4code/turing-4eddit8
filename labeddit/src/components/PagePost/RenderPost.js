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

    const onClickGostei = (Direcao) => {
       
        if (Direcao !== 1) {
            const body = {
                direction: 1
            }
            const idPost = post.id
            requestVotePost(body, idPost)
        } else {
            onClickDeleteVote()
        }
        
    }

    const onClickNaoGostei = (Direcao) => {
        if (Direcao !== -1) {
            const body = {
                direction: -1
            }
            const idPost = post.id
            requestVotePost(body, idPost)
        } else {
            onClickDeleteVote()
        }
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
            <button onClick={() => onClickGostei(post.userVoteDirection)}>↑</button>
            <button>{post.votesCount}</button>
            <button onClick={() => onClickNaoGostei(post.userVoteDirection)}>↓</button>
        </div>
    )
}

export default RenderPost
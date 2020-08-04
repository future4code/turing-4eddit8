import React, { useEffect, useReducer } from 'react'
import PostDetailContext from '../../contexts/PostDetailContext'
import {baseUrl} from '../PageLogin/PageLogin'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {initialState, PostReducer} from './PostReducer'
import VoteComment from './VoteComment'
import CreateComment from './CreateComment'

const idChumbado = "cVTfOlpsCVZMsRNzZ6mr"

function PagePost() {

    const history = useHistory()
    const [state, dispatch] = useReducer(PostReducer, initialState)

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        } else {
            requestDetailPost()
        }

    }, [history])

    const requestDetailPost = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}posts/${idChumbado}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            handleMoreDetailsPost(response.data.post)
        })
        .catch((error) => {
            alert(error.message)
        })  
    }

    const handleMoreDetailsPost = (Post) => {
        const moreDetailsPost = {
            type: "Renderizar",
            post: Post
        }

        dispatch(moreDetailsPost)
    }

    const goToPageFeed = () => {
        history.push("/feed")
    }

    console.log(state.post)
    console.log(state.comment)

    return(
        <PostDetailContext.Provider value={state.post}>
            <div>
                <h1>Post</h1>
                <p>{state.post.username}</p>
                <p>{state.post.title}</p> 
                <p>{state.post.text} </p>
                <p>{state.post.votesCount}</p> 
                <p>{state.post.commentsCount}</p>
            </div>
            <div>
                <CreateComment 
                    requestDetailPost = {requestDetailPost}
                />
            </div>
            <div>
                <h1>Comentários</h1>
                {state.comment.map((comentario) => {
                    return (
                        <div key={comentario.id}>
                            <p>{comentario.username}</p>
                            <p>{comentario.text}</p>
                            <p>{comentario.votesCount}</p>
                            <VoteComment
                                requestDetailPost = {requestDetailPost} 
                                commentId={comentario.id}
                            />
                        </div>
                    )
                })}
            </div>
            <button onClick={goToPageFeed}> Voltar </button>
        </PostDetailContext.Provider>
    )
}

export default PagePost
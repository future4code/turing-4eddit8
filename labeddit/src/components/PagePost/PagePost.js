import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../PageLogin/PageLogin'
import { initialState, PostReducer } from './PostReducer'
import RenderPost from './RenderPost'
import RenderComments from './RenderComments'
import CreateComment from './CreateComment'
import PostDetailContext from '../../contexts/PostDetailContext'
import CommentsContext from '../../contexts/CommentsContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'

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

    return(
        <PostDetailContext.Provider value={state.post}>
            <RequestDetailPostContext.Provider value={requestDetailPost}>
                <div>
                    <RenderPost />
                </div>
                <div>
                    <CreateComment />
                </div>
                <CommentsContext.Provider value={state.comment}>
                    <RenderComments />
                </CommentsContext.Provider>
                <button onClick={goToPageFeed}> Voltar </button>
            </RequestDetailPostContext.Provider>
        </PostDetailContext.Provider>
    )
}

export default PagePost
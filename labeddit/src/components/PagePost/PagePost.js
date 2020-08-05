import React, { useEffect, useReducer } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

import { baseUrl } from '../PageLogin/PageLogin'
import { initialState, PostReducer } from '../../reducers/PostReducer'

import RenderPost from './RenderPost'
import RenderComments from './RenderComments'
import CreateComment from './CreateComment'

import PostDetailContext from '../../contexts/PostDetailContext'
import CommentsContext from '../../contexts/CommentsContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

const idChumbado = "cVTfOlpsCVZMsRNzZ6mr"

function PagePost() {

    const history = useHistory()
    const pathParams = useParams()
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

        axios.get(`${baseUrl}posts/${pathParams.id}`, {
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

    const requestVoteComment = (body, postId, commentId ) => {
        const token = window.localStorage.getItem("token")

        axios.put(`${baseUrl}posts/${postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            requestDetailPost()
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
                    <RequestVoteCommentContext.Provider value={requestVoteComment}>
                        <RenderComments />
                    </RequestVoteCommentContext.Provider>
                </CommentsContext.Provider>
                <button onClick={goToPageFeed}> Voltar </button>
            </RequestDetailPostContext.Provider>
        </PostDetailContext.Provider>
    )
}

export default PagePost
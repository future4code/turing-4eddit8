import React, { useContext } from 'react'

import PostDetailContent from '../../contexts/PostDetailContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

import {Botao, ContainerBotaoVotos} from "../PageLogin/StylePageLogin"

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
        <ContainerBotaoVotos>
            <Botao
            onClick={onClickGostei}
            cor={props.commentVoteDirection === 1 ? "green" : "white"}
            corTexto={props.commentVoteDirection === 1 ? "white" : "black"}>↑
            </Botao>
            <p>{props.commentVotesCount}</p>
            <Botao
            onClick={onClickNaoGostei}
            cor={props.commentVoteDirection === -1 ? "red" : "white"}
            corTexto={props.commentVoteDirection === -1 ? "white" : "black"}>↓
            </Botao>
        </ContainerBotaoVotos>
    )
}

export default VoteComment
import React, { useContext } from 'react'
import axios from 'axios'

import { baseUrl } from '../PageLogin/PageLogin'

import PostDetailContext from '../../contexts/PostDetailContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'

import {Botao,ContainerCard,ContainerCards,ContainerInfo, ContainerBotaoVotos} from "../PageLogin/StylePageLogin"

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
         <ContainerCards>
            <ContainerCard>
                <ContainerInfo>
                    <h2>{post.username}</h2>
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </div>
                    <p>Comentários: {post.commentsCount}</p>
                </ContainerInfo>
                    <ContainerBotaoVotos>
                        <Botao 
                        cor={post.userVoteDirection === 1 ? "green" : "white"}
                        corTexto={post.userVoteDirection === 1 ? "white" : "black"}
                        onClick={() => onClickGostei(post.userVoteDirection)}>↑
                        </Botao>
                        <p>{post.votesCount}</p>
                        <Botao 
                        cor={post.userVoteDirection === -1 ? "red" : "white"}
                        corTexto={post.userVoteDirection === -1 ? "white" : "black"}
                        onClick={() => onClickNaoGostei(post.userVoteDirection)}>↓
                        </Botao>
                    </ContainerBotaoVotos>
            </ContainerCard>

        </ContainerCards>
    )
}

export default RenderPost
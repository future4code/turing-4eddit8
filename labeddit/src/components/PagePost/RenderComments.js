import React, {useContext} from 'react'

import VoteComment from './VoteComment'

import CommentsContext from '../../contexts/CommentsContext'

import {ContainerCard, ContainerCards, ContainerInfo,ContainerPublicacao} from "../PageLogin/StylePageLogin"

function RenderComments() {

    const comment = useContext(CommentsContext)

    return (
        <div>
            <div>
                <ContainerPublicacao>
                    <h1>Comentários</h1>
                </ContainerPublicacao>
            </div>
            {comment.map((comentario)=>{
     
                return (
                    <ContainerCards key={comentario.id}>
                        <ContainerCard>
                            <ContainerInfo>
                                <h2>{comentario.username}</h2>
                                <div>
                                    <p>{comentario.text}</p>
                                </div>
                            </ContainerInfo>
                                <div>
                                    <VoteComment 
                                        commentId={comentario.id}
                                        commentVoteDirection={comentario.userVoteDirection}
                                        commentVotesCount={comentario.votesCount}
                                    />
                                </div>
                        </ContainerCard>

                    </ContainerCards>
                )
            })}
        </div>
        
    )
}       
export default RenderComments
        // <div>
        //     <h1>Comentários</h1>
        //     {comment.map((comentario) => {
        //             return (
        //                 <div key={comentario.id}>
        //                     <p>{comentario.username}</p>
        //                     <p>{comentario.text}</p>
        //                     <p>{comentario.votesCount}</p>
        //                     <VoteComment 
        //                         commentId={comentario.id}
        //                         commentVoteDirection={comentario.userVoteDirection}
        //                         commentVotesCount={comentario.votesCount}
        //                     />
        //                 </div>
        //             ) 
        //     })}
        // </div>

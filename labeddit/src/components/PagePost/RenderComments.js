import React, {useContext} from 'react'

import VoteComment from './VoteComment'
import DeleteVote from './DeleteVote'

import CommentsContext from '../../contexts/CommentsContext'

function RenderComments() {

    const comment = useContext(CommentsContext)

    return (
        <div>
            <h1>Comentários</h1>
            {comment.map((comentario) => {
                if (comentario.userVoteDirection === 0) {
                    return (
                        <div key={comentario.id}>
                            <p>{comentario.username}</p>
                            <p>{comentario.text}</p>
                            <p>{comentario.votesCount}</p>
                            <VoteComment 
                                commentId={comentario.id}
                            />
                        </div>
                    )
                } else {
                    return (
                        <div key={comentario.id}>
                            <p>{comentario.username}</p>
                            <p>{comentario.text}</p>
                            <p>{comentario.votesCount}</p>
                            <VoteComment 
                                commentId={comentario.id}
                            />
                            <DeleteVote 
                                commentId={comentario.id}
                            />
                        </div>
                    )
                }   
            })}
        </div>
    )
}

export default RenderComments
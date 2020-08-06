import React, {useContext} from 'react'

import VoteComment from './VoteComment'

import CommentsContext from '../../contexts/CommentsContext'

function RenderComments() {

    const comment = useContext(CommentsContext)

    return (
        <div>
            <h1>Comentários</h1>
            {comment.map((comentario) => {
                    return (
                        <div key={comentario.id}>
                            <p>{comentario.username}</p>
                            <p>{comentario.text}</p>
                            <p>{comentario.votesCount}</p>
                            <VoteComment 
                                commentId={comentario.id}
                                commentVoteDirection={comentario.userVoteDirection}
                            />
                        </div>
                    ) 
            })}
        </div>
    )
}

export default RenderComments
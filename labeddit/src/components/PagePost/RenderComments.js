import React, {useContext} from 'react'
import CommentsContext from '../../contexts/CommentsContext'
import VoteComment from './VoteComment'

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
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default RenderComments
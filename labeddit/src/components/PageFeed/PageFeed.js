import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

function PageFeed() {

    const history = useHistory()
    const pathParams = useParams()

    const goToPost = () => {
        history.push("/post/1234")
    }

    const onClickLogout = () => {
        history.push("/")
    }

    return (
        <div>
            <button onClick={goToPost}>Mais detalhes</button>
            <button onClick={onClickLogout}>Logout</button>
        </div>
    )
}

export default PageFeed
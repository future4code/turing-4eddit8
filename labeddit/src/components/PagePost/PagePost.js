import React from 'react'
import { useHistory } from 'react-router-dom'

function PagePost() {

    const history = useHistory()

    const goToPageFeed = () => {
        history.push("/feed")
    }

    return(
        <div>
            PagePost
            <button onClick={goToPageFeed}> Voltar </button>
        </div>
    )
}

export default PagePost
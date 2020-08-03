import React from 'react'
import {useHistory} from 'react-router-dom'

function PageSignup() {

    const history = useHistory()
    
    const goToLogin = () => {
        history.push("/")
    }

    return (
        <div>
            PageSignup
            <button onClick={goToLogin}>Cadastrar</button>
        </div>
    )
}

export default PageSignup
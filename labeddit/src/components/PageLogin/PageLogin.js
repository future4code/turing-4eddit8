import React from 'react'
import { useHistory } from 'react-router-dom'

function PageLogin() {

    const history = useHistory()

    const goToLogin = () => {
        history.replace("/feed")
    }

    const goToSignUp = () => {
        history.push("/signup")
    }
    
    return (
        <div>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToSignUp}>Cadastrar</button>
        </div>
    )
}

export default PageLogin
import React from "react"
import styled from "styled-components"
import { useHistory} from 'react-router-dom'

const Cabecalho = styled.header`
background-color: black;
color: white;
margin: 0;
padding: 0;
width: 100%;
height: 10vh;
`

function Header() {
    const history = useHistory()

    const logout =()=>{
        window.localStorage.clear()
        history.push("/")
    }
    return(
        <Cabecalho>
            <h1>LabEddit</h1>
            <button onClick={logout}>Logout</button>
        </Cabecalho>
    )
}
export default Header
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'

const Cabecalho = styled.header`
background-color: black;
color: white;
width: 100%;
height: 10vh;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const BotaoLogout = styled.button`
background-color: #ff4500;
width: 5%;
height: 5vh;
border-style: none;
border-radius: 2px;
`

function Header() {

    const [atualizaEstado, setAtualizaEstado] = useState(false)

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const logout = () => {
        window.localStorage.clear()
        setAtualizaEstado(!atualizaEstado)
        history.push("/")
    }

    useEffect(() => {
        renderizaNaTela()
    }, [atualizaEstado, token])

    const renderizaNaTela = () => {
        if (token !== null) {
            return (
                <BotaoLogout onClick={logout}>Logout</BotaoLogout>
            )
        }
    }

    return(
        <Cabecalho>
            <h1>LabEddit</h1>
            {renderizaNaTela()}
        </Cabecalho>
    )
}

export default Header
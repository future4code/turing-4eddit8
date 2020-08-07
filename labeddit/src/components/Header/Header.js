import React, {useEffect} from "react"
import styled from "styled-components"
import {useHistory, useParams} from 'react-router-dom'

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
margin-right: 5vw;
`

const Logo = styled.h1`
margin-left: 5vw;
cursor: pointer;
`

function Header() {

    const pathParams = useParams()

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const logout = () => {
        window.localStorage.clear()
        history.push("/")
    }

    useEffect(() => {
        renderizaNaTela()
    }, [pathParams])

    const renderizaNaTela = () => {
        if (token !== null) {
            return (
                <BotaoLogout onClick={logout}>Logout</BotaoLogout>
            )
        }
    }

    const goToFeed = () => {
        history.push("/")
    }

    return(
        <Cabecalho>
            <Logo onClick={goToFeed}>LabEddit</Logo>
            {renderizaNaTela()}
        </Cabecalho>
    )
}

export default Header
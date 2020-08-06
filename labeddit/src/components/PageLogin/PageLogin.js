import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import useInput from '../../hooks/useInput'
import {ContainerLogin, FormularioLogin, ContainerInput, BotaoLogin} from './StylePageLogin'

export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/"

function PageLogin() {

    const history = useHistory()
    const {form, onChange, resetaEntrada} = useInput({
        email: "",
        senha: ""
    })

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token !== null) {
            history.replace("/feed")
        }
    }, [])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickLogin()
    }

    const onClickLogin = () => {
        const body = {
            email: form.email,
            password: form.senha
        }

        axios.post(`${baseUrl}login`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            resetaEntrada()
            history.replace("/feed")
        })

        .catch((error) => {
            alert(error.message)
        })
    }

    const goToSignUp = () => {
        history.push("/signup")
    }
    
    return (
        <ContainerLogin>
            <FormularioLogin onSubmit={handleSave}>
                <ContainerInput>
                    <label>Login</label>
                    <input 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleInputChange} 
                    />
                </ContainerInput>
                <ContainerInput>
                    <label>Senha</label>
                    <input 
                        name="senha" 
                        type="password" 
                        value={form.senha} 
                        onChange={handleInputChange} 
                    />
                </ContainerInput>
                <ContainerInput>
                    <BotaoLogin>Login</BotaoLogin>
                </ContainerInput>
            </FormularioLogin>
            <button onClick={goToSignUp}>Cadastrar</button>
        </ContainerLogin>
    )
}

export default PageLogin
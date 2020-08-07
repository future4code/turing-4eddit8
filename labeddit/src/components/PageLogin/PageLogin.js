import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import useInput from '../../hooks/useInput'
import {ContainerLogin, FormularioLogin, ContainerInput, BotaoLogin, InfoCadastro , 
        ContainerGeralPageLogin, BotaoCadastrar, TextoLogin} from './StylePageLogin'

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
        <ContainerGeralPageLogin>
            <ContainerLogin>
                <FormularioLogin onSubmit={handleSave}>
                    <ContainerInput>
                        <TextoLogin>Email</TextoLogin>
                        <input 
                            name="email" 
                            type="email" 
                            value={form.email} 
                            onChange={handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextoLogin>Senha</TextoLogin>
                        <input 
                            name="senha" 
                            type="password" 
                            value={form.senha} 
                            onChange={handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <BotaoLogin>Login</BotaoLogin>
                    </ContainerInput>
                </FormularioLogin>
            </ContainerLogin>
            <InfoCadastro>
                <h1>Ainda não é membro?</h1>
                <h3>Você não sabe o que está perdendo, cadastre-se</h3>
                <BotaoCadastrar onClick={goToSignUp}>Cadastrar-se</BotaoCadastrar>
            </InfoCadastro>
        </ContainerGeralPageLogin>
    )
}

export default PageLogin
import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import {ContainerPageSignup} from '../PageLogin/StylePageLogin'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
  
function PageSignup() {

    const { form, onChange, resetaEntrada } = useInput({
        nomeUsuario: "",
        email: "",
        senha: ""
      });

    const history = useHistory();

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    };

    const handleSave = (event) => {
        event.preventDefault()
        cadastrar()
    }

    const goToLogin = () => {
        history.push("/")
    }

    const cadastrar=()=>{
        const body ={
            "email": form.email,
            "password": form.senha,
            "username": form.nomeUsuario
        }
        axios
        .post(`${url}/signup`, body)
        .then(response=>{
            history.push("/")
            resetaEntrada()
            window.localStorage.setItem("token", response.data.token)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <ContainerPageSignup>
            <button onClick={goToLogin}>Voltar</button>
            Page=>Signup
            <form onSubmit={handleSave}>
                <input onChange={handleInputChange} name={"nomeUsuario"} value={form.nomeUsuario} placeholder={"Nome de usuário"} type={"text"} required/>
                <input onChange={handleInputChange} name={"email"} value={form.email} placeholder={"Email"} type={"email"} required/>
                <input onChange={handleInputChange} name={"senha"} value={form.senha} placeholder={"Senha"} type={"password"} required/>
                <button>Cadastrar</button>
            </form>
        </ContainerPageSignup>
    )
}

export default PageSignup;
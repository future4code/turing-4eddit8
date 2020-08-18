import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import {ContainerPageSignup, ContainerSignUp, FormularioLogin,
    ContainerInput,BotaoCadastrar, TextoLogin,
BotaoVoltar} from '../PageLogin/StylePageLogin'

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
            <BotaoVoltar onClick={goToLogin}>Voltar</BotaoVoltar>
            <ContainerSignUp>
                <FormularioLogin onSubmit={handleSave}>
                    <ContainerInput>
                        <TextoLogin>Nome de Usuário</TextoLogin>
                        <input
                            onChange={handleInputChange}
                            name={"nomeUsuario"}
                            value={form.nomeUsuario} 
                            placeholder={"Nome de usuário"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextoLogin>Email</TextoLogin>
                        <input 
                            onChange={handleInputChange} 
                            name={"email"} value={form.email} 
                            placeholder={"Email"} 
                            type={"email"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextoLogin>Senha</TextoLogin>
                        <input 
                            onChange={handleInputChange} 
                            name={"senha"} value={form.senha} 
                            placeholder={"Senha"} 
                            type={"password"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <BotaoCadastrar>Cadastrar</BotaoCadastrar>
                    </ContainerInput>
                </FormularioLogin>
            </ContainerSignUp>
        </ContainerPageSignup>
    )
}

export default PageSignup;
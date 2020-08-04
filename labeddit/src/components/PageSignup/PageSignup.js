import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (name, value) => {
      const newForm = { ...form, [name]: value };
      setForm(newForm);
    };
  
    return { form, onChange };
};
  
function PageSignup() {
    const { form, onChange } = useForm({
        nomeUsuario: "",
        email: "",
        senha: ""
      });

    const history = useHistory();

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    };

    const goToLogin = () => {
        history.push("/")
    }

    const cadastrar=(event)=>{
        event.preventDefault()
        const body ={
            "email": form.email,
            "password": form.senha,
            "username": form.nomeUsuario
        }
        axios
        .post(`${url}/signup`, body)
        .then(response=>{
            console.log(response.data)
            history.push("/")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <div>
            <button onClick={goToLogin}>Voltar</button>
            PageSignup
            <form onSubmit={cadastrar}>
                <input onChange={handleInputChange} name={"nomeUsuario"} value={form.nomeUsuario} placeholder={"Nome de usuário"} type={"text"} required/>
                <input onChange={handleInputChange} name={"email"} value={form.email} placeholder={"Email"} type={"email"} required/>
                <input onChange={handleInputChange} name={"senha"} value={form.senha} placeholder={"Senha"} type={"password"} required/>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default PageSignup;
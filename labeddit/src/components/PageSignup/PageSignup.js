import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

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

    return (
        <div>
            <button onClick={goToLogin}>Voltar</button>
            PageSignup
            <form>
                <input onChange={handleInputChange} name={"nomeUsuario"} value={form.nomeUsuario} placeholder={"Nome de usuário"} type={"text"}/>
                <input onChange={handleInputChange} name={"email"} value={form.email} placeholder={"Email"} type={"email"}/>
                <input onChange={handleInputChange} name={"senha"} value={form.senha} placeholder={"Senha"} type={"password"}/>
                <button onClick={goToLogin}>Cadastrar</button>
            </form>
        </div>
    )
}

export default PageSignup;
import styled from 'styled-components'

export const ContainerLogin = styled.div`
width: 50%;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerSignUp = styled.div`
width: 100%;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerGeralPageLogin = styled.div`
display: flex;
`

export const ContainerPageSignup = styled.div`
width: 100%;
height: 80vh;
`

export const ContainerAlturaMinimo = styled.div`
width: 100%;
min-height: 80vh;
`

export const InfoCadastro = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const FormularioLogin = styled.form`
width: 100%;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerInput = styled.div`
height: 10vh;
display: flex;
flex-direction: column;
`

export const BotaoLogin = styled.button`
background-color: #ff4500;
width: 5vw;
height: 5vh;
border-style: none;
border-radius: 2px;
font-size: 16px;
font-weight: bold;
`

export const TextoLogin = styled.label`
font-size: 16px;
font-weight: bold;
`

export const BotaoCadastrar = styled.button`
background-color: #ff4500;
width: 10vw;
height: 5vh;
border-style: none;
border-radius: 2px;
font-size: 16px;
font-weight: bold;
`

export const Botao = styled.button`
font-size: 20px;
font-weight: bold;
background-color: ${props => props.cor};
color: ${props => props.corTexto};
cursor: pointer;
border-style: none;
outline: none;
border: 1px solid black;
width: 8%;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid black;
width: 40vw;
padding: 20px;
`

export const ContainerInfo = styled.div`
cursor: pointer;
`

export const ContainerCards =  styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 0px;
`

export const TextoPostagem = styled.textarea`
margin: 5px;
height: 25vh;
width: 42.5vw;
`

export const TituloPostagem = styled.input`
margin: 5px;
width: 42.5vw;
`

export const ContainerPostagem = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`

export const FormularioPostagem = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const ContainerPublicacao = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const ContainerBotaoVotos = styled.div`
width: 100%;
display: flex;
`

export const BotaoCriaPost = styled.button`
width: 8vw;
height: 3vw;
background-color: #ff4500;
border-style: none;
border-radius: 3px;
font-weight: bold;
font-size: 16px;
`

export const BotaoVoltar = styled.button`
width: 5vw;
height: 3vw;
background-color: white;
color: #ff4500;
font-size: 16px;
font-weight: bold;
border-style: none;
outline: none;
cursor: pointer;
margin-left: 5vw;
`
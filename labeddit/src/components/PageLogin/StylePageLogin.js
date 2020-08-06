import styled from 'styled-components'

export const ContainerLogin = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
// export const TituloPostagem = styled.input`
// margin: 5px;
// width: 100%;
// `

// export const ContainerPostagem = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// width: 100%;
// `

// export const FormularioPostagem = styled.form`
// grid-column: 2/4;
// width: 100%;
// height: 100%;
// `

// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// width: 100%;
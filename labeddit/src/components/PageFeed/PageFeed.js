import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import {Botao, ContainerCard, ContainerCards, 
ContainerInfo, TextoPostagem, 
TituloPostagem, ContainerPostagem, FormularioPostagem, ContainerPublicacao, ContainerBotaoVotos, ContainerAlturaMinimo, BotaoCriaPost} from "../PageLogin/StylePageLogin"

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
const token = window.localStorage.getItem("token")

function PageFeed() {
    
    const { form, onChange, resetaEntrada } = useInput({
        textoPost: "",
        tituloPost: ""
    });
    
    const [post, setPost]= useState([])
    const [comentario, setComentario]= useState("")
    
    const history = useHistory()
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    useEffect(() => {
        pegaPosts()
    }, [])
    
    const goToPost = (idPost) => {
        history.push(`/post/${idPost}`)
    }
    
    const handleInputChange = event => {
        const { name, value} = event.target;
        
        onChange(name, value);
    }
    
    const handleSave = (event) => {
        event.preventDefault()
        criaPost()
    }
    
    const pegaPosts = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${url}/posts`,{
            headers:{
                Authorization: token
            }
        })
        .then(response=>{
            setPost(response.data.posts)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    
    const criaPost = () => {
        const token = window.localStorage.getItem("token")

        const body={
            "text": form.textoPost,
	        "title": form.tituloPost
        }
        
        axios.post(`${url}/posts`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(response=>{
            pegaPosts()
            resetaEntrada()
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    
    const curtir = (post)=>{
        if(post.userVoteDirection !== 1){
            const body={
                "direction": 1
            }
            votar(post, body)
        }else{
            removerVoto(post)
        }
    }
    
    const naoCurti = (post)=>{
        if(post.userVoteDirection !== -1){
            const body={
                "direction": -1
            }
            votar(post, body)
        }else{
            removerVoto(post)
        }
    }
    
    const removerVoto = (post) => {
        const body={
            "direction": 0
        }
        votar(post, body)
    }
    
    const votar = (post, body)=>{
        const token = window.localStorage.getItem("token")
        axios.put(`${url}/posts/${post.id}/vote`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(()=>{
            pegaPosts()
            console.log("Entrei no then")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    
    
    const onChangeInput =(event)=>{
        setComentario(event.target.value)
    }

    return (
        <ContainerAlturaMinimo>
            <div>
                <ContainerPublicacao>
                    <h1>Criar publicação</h1>
                </ContainerPublicacao>
                <ContainerPostagem>
                    <FormularioPostagem onSubmit={handleSave}>
                        <TituloPostagem onChange={handleInputChange} name={"tituloPost"} value={form.tituloPost} placeholder={"Escreva o titulo do seu Post"} type={"text"} required/>
                        <div>
                            <TextoPostagem onChange={handleInputChange} name={"textoPost"} value={form.textoPost} placeholder={"Escreva seu Post"} type={"text"} required/>
                        </div>
                        <BotaoCriaPost>Criar Post</BotaoCriaPost>
                    </FormularioPostagem>
                </ContainerPostagem>
            </div>
             {post.map((post)=>{

                    return (
                        <ContainerCards key={post.id}>
                            <ContainerCard>
                                <ContainerInfo onClick={()=>goToPost(post.id)}>
                                    <h2>{post.username}</h2>
                                    <div>
                                        <h3>{post.title}</h3>
                                        <p>{post.text}</p>
                                    </div>
                                    <p>Comentários: {post.commentsCount}</p>
                                </ContainerInfo>
                                    <ContainerBotaoVotos>
                                        <Botao 
                                        cor={post.userVoteDirection === 1 ? "green" : "white"}
                                        corTexto={post.userVoteDirection === 1 ? "white" : "black"}
                                        onClick={()=> curtir(post)}>↑
                                        </Botao>
                                        <p>{post.votesCount}</p>
                                        <Botao 
                                        cor={post.userVoteDirection === -1 ? "red" : "white"}
                                        corTexto={post.userVoteDirection === -1 ? "white" : "black"}
                                        onClick={()=> naoCurti(post)}>↓
                                        </Botao>
                                    </ContainerBotaoVotos>
                            </ContainerCard>
            
                        </ContainerCards>
                        )
            })}
        </ContainerAlturaMinimo>
    )
}

export default PageFeed
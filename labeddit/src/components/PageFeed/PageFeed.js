import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';
import useInput from '../../hooks/useInput'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdYcDRYT2pNREZxZGxnM2Q1dHRqIiwiZW1haWwiOiJ2aW55QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidmlueXR1cmluZyIsImlhdCI6MTU5NjU2MzY2MH0.8jJdCqYjasydjXUiT_9tNOD5IF2Rn5WJKXqRDws50ic"

function PageFeed() {

    const { form, onChange, resetaEntrada } = useInput({
        textoPost: "",
        tituloPost: ""
      });
    
    const [post, setPost]= useState([])
    const [comentario, setComentario]= useState("")

    const history = useHistory()
    const pathParams = useParams()

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

    const onClickLogout = () => {
        history.push("/")
    }

    useEffect(()=>{
        pegaPosts()
    },[])

    const pegaPosts = ()=>{
        axios
        .get(`${url}/posts`,{
            headers:{
                Authorization: token
            }
        })
        .then(response=>{
            console.log(response.data)
            setPost(response.data.posts)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const criaPost = () => {
        const body={
            "text": form.textoPost,
	        "title": form.tituloPost
        }
        axios
        .post(`${url}/posts`, body, {
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

    const curtir = (idPost)=>{
        const body={
            "direction": 1
        }
        axios
        .put(`${url}/posts/${idPost}/vote`, body, {
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

    const naoCurti = (idPost)=>{
        const body={
            "direction": -1
        }
        axios
        .put(`${url}/posts/${idPost}/vote`, body, {
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

    const onClickRemoverVoto = (idPost) => {
        const body={
            "direction": 0
        }
        axios
        .put(`${url}/posts/${idPost}/vote`, body, {
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

    /* const comentar = (postId)=>{
        if(comentario !== ""){
            const body ={
                "text": comentario
            }
            axios 
            .post(`${url}/posts/${postId}/comment`, body, {
                headers:{
                    Authorization: token
                }
            })
            .then(()=>{
                console.log("Entrei no then")
            })
            .catch(err=>{
                console.log(err.message)
            })
        }else{
            alert("Digita algo animal")
        }
    } */

    return (
        <div>
            <button onClick={onClickLogout}>Logout</button>
            <form onSubmit={handleSave}>
                <input onChange={handleInputChange} name={"tituloPost"} value={form.tituloPost} placeholder={"Escreva o titulo do seu Post"} type={"text"} required/>
                <input onChange={handleInputChange} name={"textoPost"} value={form.textoPost} placeholder={"Escreva seu Post"} type={"text"} required/>
                <button>Criar Post</button>
            </form>
             {post.map((post)=>{
                 if (post.userVoteDirection === 0) {
                    return (
                        <div key={post.id}>
                            <div>
                                <button onClick={()=>goToPost(post.id)}>Detalhes post</button>
                                <h2>{post.username}</h2>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.text}</p>
                                </div>
                               <button onClick={()=> curtir(post.id)}>Like</button> <span>{post.votesCount}</span> <button onClick={()=> naoCurti(post.id)}>Deslike</button> //<span>{post.commentsCount}</span>
                               {/* <input placeholder={"Comentar"} value={comentario} onChange={onChangeInput}/> <button onClick={()=> comentar(post.id)}>Comentar</button> */}
                            </div>
            
                        </div>
                        )
                 } else {
                    return (
                        <div key={post.id}>
                            <div>
                                <button onClick={()=>goToPost(post.id)}>Detalhes post</button>
                                
                                <h2>{post.username}</h2>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.text}</p>
                                </div>
                               <button onClick={()=> curtir(post.id)}>Like</button> <span>{post.votesCount}</span> <button onClick={()=> naoCurti(post.id)}>Deslike</button> <button onClick={() => onClickRemoverVoto(post.id)}>Remover Voto</button> //  <span>{post.commentsCount}</span> 
                               {/* <input placeholder={"Comentar"} value={comentario} onChange={onChangeInput}/> <button onClick={()=> comentar(post.id)}>Comentar</button> */}
                            </div>
            
                        </div>
                    )
                 }
                
            })}
        </div>
    )
}

export default PageFeed
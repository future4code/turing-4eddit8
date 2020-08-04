import React, {useContext} from 'react'
import axios from 'axios'
import useInput from '../../hooks/useInput'
import {baseUrl} from '../PageLogin/PageLogin'
import PostDetailContext from '../../contexts/PostDetailContext'

function CreateComment(props) {

    const {form, onChange, resetaEntrada} = useInput({
        comentario: ""
    })

    const post = useContext(PostDetailContext)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickComentar()
    }

    const onClickComentar = () => {
        const token = window.localStorage.getItem("token")

        const body = {
            text: form.comentario
        }

        axios.post(`${baseUrl}posts/${post.id}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Você comentou com sucesso")
            resetaEntrada()
            props.requestDetailPost()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                <input 
                    name="comentario" 
                    type="text" 
                    value={form.comentario}
                    onChange={handleInputChange}
                />
                <button>Comentar</button>
            </form>
        </div>
    )
}

export default CreateComment
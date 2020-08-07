import React, { useContext } from 'react'
import axios from 'axios'

import useInput from '../../hooks/useInput'
import { baseUrl } from '../PageLogin/PageLogin'

import PostDetailContext from '../../contexts/PostDetailContext'
import requestDetailPostContext from '../../contexts/RequestDetailPostContext'

import {ContainerPublicacao, ContainerPostagem, FormularioPostagem, TextoPostagem, BotaoCriaPost} from '../PageLogin/StylePageLogin'

function CreateComment(props) {

    const {form, onChange, resetaEntrada} = useInput({
        comentario: ""
    })

    const post = useContext(PostDetailContext)
    const request = useContext(requestDetailPostContext)

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
            request()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div>
            <ContainerPublicacao>
                <h1>Criar Comentário</h1>
            </ContainerPublicacao>
            <ContainerPostagem>
                <FormularioPostagem onSubmit={handleSave}>
                    <div>
                        <TextoPostagem 
                            name="comentario" 
                            type="text" 
                            value={form.comentario}
                            onChange={handleInputChange}
                            placeholder="Não há limites de caracteres, para você não limitar o seu pensamento, 
                            então digite aqui o seu comentário."
                            required
                        />
                    </div>
                    <BotaoCriaPost>Comentar</BotaoCriaPost>
                </FormularioPostagem>
            </ContainerPostagem>
        </div>
    )
}

export default CreateComment
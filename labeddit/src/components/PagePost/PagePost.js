import React, { useEffect } from 'react'
import {baseUrl} from '../PageLogin/PageLogin'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const idChumbado = "060ArFua9saK6pXR7xfO"

function PagePost() {

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        } else {
            requestDetailPost()
        }

    }, [history])

    const requestDetailPost = () => {

        axios.get(`${baseUrl}posts/${idChumbado}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            alert(error.message)
        })
         
    }

    const goToPageFeed = () => {
        history.push("/feed")
    }

    return(
        <div>
            PagePost
            <button onClick={goToPageFeed}> Voltar </button>
        </div>
    )
}

export default PagePost
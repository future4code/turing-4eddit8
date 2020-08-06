import React from 'react'
import styled from 'styled-components'

const Rodape = styled.footer`
background-color: black;
color: white;
display: flex;
align-items: center;
width: 100%;
height: 10vh;
position: fixed;
bottom: 0;
`

function Footer() {
    return (
        <Rodape>
            <h1>LabEddit</h1>
        </Rodape>
    )
}

export default Footer
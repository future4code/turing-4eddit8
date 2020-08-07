import React from 'react';
import Router from "./components/Router/Router"
import styled from 'styled-components';

const ContainerGeral = styled.div`
margin: 0;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
`

function App() {
  return (
    <ContainerGeral>
      <Router />
    </ContainerGeral>
  );
}

export default App;
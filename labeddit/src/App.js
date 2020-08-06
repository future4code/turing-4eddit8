import React from 'react';
import Footer from './components/Footer/Footer'
import Router from "./components/Router/Router"
import styled from 'styled-components';

const ContainerGeral = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

function App() {
  return (
    <ContainerGeral>
      <Router />
      <Footer />
    </ContainerGeral>
  );
}

export default App;
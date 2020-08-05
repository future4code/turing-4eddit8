import React from 'react';
import PageLogin from './components/PageLogin/PageLogin'
import PageFeed from './components/PageFeed/PageFeed'
import PagePost from './components/PagePost/PagePost'
import PageSignup from './components/PageSignup/PageSignup'
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header"
import styled from 'styled-components';

const ContainerGeral = styled.div`
margin: 0;
padding: 0;
height: 100%;
`

function App() {
  return (
    <ContainerGeral>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageLogin />
          </Route>
          <Route exact path="/signup">
            <PageSignup />
          </Route>
          <Route exact path="/feed">
            <PageFeed />
          </Route>
          <Route exact path="/post/:id">
            <PagePost />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContainerGeral>
  );
}

export default App;
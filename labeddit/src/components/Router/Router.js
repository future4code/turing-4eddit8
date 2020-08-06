import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import PageLogin from '../PageLogin/PageLogin'
import PageFeed from '../PageFeed/PageFeed'
import PagePost from '../PagePost/PagePost'
import PageSignup from '../PageSignup/PageSignup'
import Header from "../Header/Header"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
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
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Router />, rootElement)
export default Router
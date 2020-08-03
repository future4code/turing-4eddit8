import React from 'react';
import PageLogin from './components/PageLogin/PageLogin'
import PageFeed from './components/PageFeed/PageFeed'
import PagePost from './components/PagePost/PagePost'
import PageSignup from './components/PageSignup/PageSignup'
import {Switch, Route, BrowserRouter} from "react-router-dom"


function App() {
  return (
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
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Editor from './Editor'
import { GlobalStyle, Container } from './styled.components'
import { TemplateList } from "./TemplateList";



function App() {

  
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Switch>
          <Route exact path="/" component={TemplateList} />

          <Route path="/new" exact render={(props) => {
            return <Editor {...props} edit={false} />
          }} />

          <Route path="/edit/:uid" exact render={(props) => {
            // debugger;
            return <Editor {...props} edit={true} templateData={props.location.state} />
          }} />

          <Redirect to="/"></Redirect>
        </Switch>

      </Container>
    </Router>
  )


}

export default App;




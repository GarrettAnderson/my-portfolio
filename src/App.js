import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ProjectDetails from './components/ProjectDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/projects/:id" component={ProjectDetails} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

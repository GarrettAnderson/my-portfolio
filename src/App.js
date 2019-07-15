import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ProjectPage from './pages/ProjectPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:id" component={ProjectPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

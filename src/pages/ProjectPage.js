import React, { Component } from 'react'
// import Homepage from '../components/Homepage'
import data from '../data/projects.json'

class ProjectPage extends Component {
  state = {
    project: {}
  }

  componentDidMount() {
    console.log(this.state.project)
    this.setState({ project: data[this.props.match.params.id] })
  }

  render() {
    return (
      <section>
        <h1>this is the project details</h1>
      </section>
    )
  }
}

export default ProjectPage

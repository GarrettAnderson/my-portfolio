import React, { Component } from 'react'
import axios from 'axios'
import data from '../data/projects.json'

class ProjectPage extends Component {
  state = {
    project: {}
  }

  // componentDidMount() {
  //   console.log('page load')
  //   axios.get('/projects.json').then((response) => {
  //     console.log(response)
  //   })
  // }

  render() {
    return (
      <section>
        <h1>{this.state.project.name}</h1>
      </section>
    )
  }
}

export default ProjectPage

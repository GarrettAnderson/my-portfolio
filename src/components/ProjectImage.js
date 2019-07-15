import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/projects.json'

class ProjectImage extends Component {
  state = {
    projects: []
  }

  render() {
    console.log(data)
    return (
      <li key={this.props.id}>
        <img alt="project" src={this.props.url} />
        <Link to={`/project/${this.props.id}`}>
          <h1>{this.props.name}</h1>
        </Link>
      </li>
    )
  }
}

export default ProjectImage

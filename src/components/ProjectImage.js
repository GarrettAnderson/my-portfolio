import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectImage extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <Link to={`/projects/${this.props.id}`}>
          <img alt="project" src={this.props.src} />
        </Link>
      </li>
    )
  }
}

export default ProjectImage

import React, { Component } from 'react'

class ProjectImage extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    console.log('page load')
    console.log(this.props)
  }

  render() {
    return (
      <li key={this.props.id}>
        <Link to={`/project/${this.props.id}`}>
          <img alt="project" src={this.props.url} id={this.props.id} />
          <h3>{this.props.name}</h3>
        </Link>
      </li>
    )
  }
}

export default ProjectImage

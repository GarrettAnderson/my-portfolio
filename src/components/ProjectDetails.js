import React, { Component } from 'react'

class ProjectDetails extends Component {
  state = {
    navShown: false
  }
  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        <img alt="project-image" src={this.props.src} />
      </section>
    )
  }
}

export default ProjectDetails

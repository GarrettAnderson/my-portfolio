import React, { Component } from 'react'
import ProjectSection from '../components/ProjectSection'
import ProjectImage from '../components/ProjectImage'

class ProjectDetails extends Component {
  state = {
    navShown: false
  }
  render() {
    return (
      <section>
        <img alt="project-image" src={this.props.src} />
      </section>
    )
  }
}

export default ProjectDetails

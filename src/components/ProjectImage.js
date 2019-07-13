import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

class ProjectImage extends Component {
  state = {
    projects: []
  }

  render() {
    return (
      <li key={this.props.id}>
        <Link to={`/project/${this.props.id}`}>
          <img alt="project" src={this.props.src} />
          <h1>{this.props.name}</h1>
        </Link>
      </li>
    )
  }
}

export default ProjectImage

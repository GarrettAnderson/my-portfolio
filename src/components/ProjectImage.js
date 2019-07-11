import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

class ProjectImage extends Component {
  state = {
    projects: [
      { id: 1, source: colorPickerImg, name: 'Color Picker' },
      { id: 2, source: bombSnifferImg, name: 'Minesweeper' },
      { id: 3, source: toTheMoviesImg, name: 'To The Movies' },
      { id: 4, source: capstoneYogiMe, name: 'Yogi Me' }
    ]
  }

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

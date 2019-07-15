import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/projects.json'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

const projects = [
  { id: 1, source: colorPickerImg, name: 'Color Picker' },
  { id: 2, source: bombSnifferImg, name: 'Minesweeper' },
  { id: 3, source: toTheMoviesImg, name: 'To The Movies' },
  { id: 4, source: capstoneYogiMe, name: 'Yogi Me' }
]

class ProjectImage extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    console.log(projects[this.props.match.params.id])
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

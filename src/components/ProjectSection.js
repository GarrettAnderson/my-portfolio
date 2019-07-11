import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

const projectImages = [
  { id: 1, source: colorPickerImg },
  { id: 2, source: bombSnifferImg },
  { id: 3, source: toTheMoviesImg },
  { id: 4, source: capstoneYogiMe }
]

class ProjectSection extends Component {
  render() {
    return (
      <ol>
        {projectImages.map((image) => {
          console.log(image)
          return (
            <li key={this.props.id}>
              <Link to={`/projects/${image.id}`}>
                <img alt="project" src={image.source} />
              </Link>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default ProjectSection

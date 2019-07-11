import React, { Component } from 'react'
import ProjectImage from '../components/ProjectImage'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

class ProjectSection extends Component {
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
      <ol>
        {this.state.projects.map((image) => {
          console.log(image)
          return <ProjectImage key={image.id} id={image.id} src={image.source} name={image.name} />
        })}
      </ol>
    )
  }
}

export default ProjectSection

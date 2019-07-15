import React, { Component } from 'react'
import ProjectImage from '../components/ProjectImage'
// import data from '../data/projects.json'
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

class ProjectSection extends Component {
  state = {
    projects: []
  }

  render() {
    return (
      <ol>
        {projects.map((image) => {
          console.log(image)
          return <ProjectImage key={image.id} id={image.id} url={image.source} name={image.name} />
        })}
      </ol>
    )
  }
}

export default ProjectSection

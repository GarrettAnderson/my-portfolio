import React, { Component } from 'react'
import ProjectImage from '../components/ProjectImage'
import data from '../data/projects.json'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'

class ProjectSection extends Component {
  state = {
    projects: []
  }

  render() {
    return (
      <ol>
        {data.map((image) => {
          console.log(image)
          return <ProjectImage key={image.id} id={image.id} src={image.source} name={image.name} />
        })}
      </ol>
    )
  }
}

export default ProjectSection

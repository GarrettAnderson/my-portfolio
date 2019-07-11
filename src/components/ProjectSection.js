import React, { Component } from 'react'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import capstoneYogiMe from '../images/capstoneYogiMe.png'
import ProjectImage from '../components/ProjectImage'

const projectImages = [
  { id: 1, source: colorPickerImg },
  { id: 2, source: bombSnifferImg },
  { id: 3, source: toTheMoviesImg },
  { id: 4, source: capstoneYogiMe }
]

class ProjectSection extends Component {
  render() {
    return (
      <section className="projects" id="favorite-projects">
        <h3>Projects</h3>
        <ol>
          {projectImages.map((image) => {
            console.log(image)
            return <ProjectImage key={image.id} id={image.id} src={image.source} />
          })}
        </ol>
      </section>
    )
  }
}

export default ProjectSection

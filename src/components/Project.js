import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (
      <ol>
        {projectImages.map((image) => {
          console.log(image)
          return <ProjectImage key={image.id} id={image.id} src={image.source} name={image.name} />
        })}
      </ol>
    )
  }
}

export default Project

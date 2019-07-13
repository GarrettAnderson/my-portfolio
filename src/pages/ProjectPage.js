import React, { Component } from 'react'
import axios from 'axios'
import data from '../data/projects.json'

class ProjectPage extends Component {
  state = {
    // projects: [
    //   { id: 1, source: colorPickerImg, name: 'Color Picker' },
    //   { id: 2, source: bombSnifferImg, name: 'Minesweeper' },
    //   { id: 3, source: toTheMoviesImg, name: 'To The Movies' },
    //   { id: 4, source: capstoneYogiMe, name: 'Yogi Me' }
    // ],
    project: {}
  }

  componentDidMount() {
    console.log('page load')
    axios.get('../data/projects.json').then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <section>
        <h1>{this.state.project.name}</h1>
      </section>
    )
  }
}

export default ProjectPage

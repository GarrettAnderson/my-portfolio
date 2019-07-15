import React, { Component } from 'react'
import axios from 'axios'
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

class ProjectPage extends Component {
  state = {
    project: {}
  }

  render() {
    return (
      <section>
        <h1>this is the project details</h1>
      </section>
    )
  }
}

export default ProjectPage

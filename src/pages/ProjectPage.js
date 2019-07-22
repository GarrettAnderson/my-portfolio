import React, { Component } from 'react'
// import Homepage from '../components/Homepage'
import data from '../data/projects.json'

class ProjectPage extends Component {
  state = {
    project: {}
  }

  componentDidMount() {
    console.log(data)
    console.log(this.props.match.params.id)
    this.setState({ project: data[this.props.match.params.id] })
    console.log(this.state.project)
  }

  render() {
    return (
      <section>
        <h1>{this.state.project.name}</h1>
        <img src={this.state.project.source} alt={`${this.state.project.name}` + ' Image'} />
        <p>{this.state.project.description}</p>
        <ol>
          <li>
            <a href={this.state.project.github} target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href={this.state.project.live} target="_blank">
              Live Site
            </a>
          </li>
        </ol>
      </section>
    )
  }
}

export default ProjectPage

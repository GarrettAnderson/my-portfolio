import React, { Component } from 'react'
import profileImg from '../images/cropHeadShot.png'
import data from '../data/projects.json'
import { Link } from 'react-router-dom'

class Homepage extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    console.log(data)
    this.setState({ projects: data })
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <section className="profile-img-container">
            <img src={profileImg} alt="headshot" className="profile-image" />
          </section>
          <nav className="navbar">
            <ol>
              <li>
                <a href="#favorite-projects">Projects</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#contact-me">Contact</a>
              </li>
            </ol>
          </nav>
        </header>
        <main>
          <section className="projects" id="favorite-projects">
            <h3>Projects</h3>
            <ol>
              {this.state.projects.map((image) => {
                console.log(image)
                return (
                  <li key={image.id}>
                    <Link to={`/project/${image.id}`}>
                      <img alt="project" src={image.source} id={image.id} />
                      <h3>{image.name}</h3>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </section>
          <article id="about-me">
            <h3>About</h3>
            <p>Florida boy with a global mindset and a passion for building beautiful things.</p>
          </article>
          <section className="contact-form" id="contact-me">
            <h3>Contact</h3>
            <form action="https://formspree.io/garrettleegrahamanderson@gmail.tld" method="POST">
              <input type="text" name="name" />
              <input type="text" name="_replyto" />
              <input type="submit" value="send" />
            </form>
          </section>
        </main>
        <footer>
          Made with 💛by Garrett Lee Graham Anderson
          <ol>
            <li>
              <a href="https://github.com/GarrettAnderson">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/garrettleegrahamanderson/">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@garrettleegrahamanderson">
                <i className="fab fa-medium-m" />
              </a>
            </li>
          </ol>
        </footer>
      </div>
    )
  }
}

export default Homepage

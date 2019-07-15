import React, { Component } from 'react'
import profileImg from '../images/cropHeadShot.png'
import ProjectSection from '../components/ProjectSection'
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

class Homepage extends Component {
  state = {
    navShown: false
  }

  render() {
    const formSchema = {
      title: '',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          default: ''
        },
        email: {
          type: 'string',
          title: 'Email',
          default: ''
        },
        subject: {
          type: 'string',
          title: 'Subject',
          default: ''
        },
        message: {
          type: 'string',
          format: 'textarea',
          title: 'Message',
          default: ''
        }
      }
    }
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
        {/* The aside is to become visible on larger viewports
        <aside>
          <figure>
            <img src={profileImg} alt="profile-image" />
            <figcaption>Garrett Lee Graham Anderson</figcaption>
          </figure>
          <ol>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ol>
        </aside> */}
        <main>
          <section className="projects" id="favorite-projects">
            <h3>Projects</h3>
            <ProjectSection />
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

import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import profileImg from '../images/headshot.jpg'
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
    navShown: true
  }

  render() {
    const formSchema = {
      title: <h3>Contact Me</h3>,
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
      <div>
        <header>
          <img src={profileImg} alt="profile-image" />
          <button onClick={() => this.setState({ navShown: !this.state.navShown })}>
            {this.state.navShown ? <i class="fas fa-bars" /> : <i class="fas fa-times" />}
          </button>
          <nav className={`nav-dropdown ${this.state.navShown ? 'is-shown' : ''} `}>
            <ol>
              <li>
                <a href="#favorite-projects">Projects</a>
              </li>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#contact-me">Contact Me</a>
              </li>
            </ol>
          </nav>
        </header>
        <aside>
          <figure>
            <img src={profileImg} alt="profile-image" />
            <figcaption>Garrett Lee Graham Anderson</figcaption>
          </figure>
          <ol>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact Me</li>
          </ol>
        </aside>
        <main>
          <section className="projects" id="favorite-projects">
            <ol>
              {projectImages.map((image) => {
                return (
                  <li key={image.id}>
                    <img src={image.source} />
                  </li>
                )
              })}
            </ol>
          </section>
          <article id="about-me">
            <h3>About Me</h3>
            <p>Florida boy with a global mindset and a passion for building beautiful things.</p>
          </article>
          <section className="contact-form" id="contact-me">
            <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="edit-contact-form" />
          </section>
        </main>
        <footer>
          Made with 💛by Garrett Lee Graham Anderson
          <ol>
            <li>
              <a href="https://github.com/GarrettAnderson">
                <i class="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/garrettleegrahamanderson/">
                <i class="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@garrettleegrahamanderson">
                <i class="fab fa-medium-m" />
              </a>
            </li>
          </ol>
        </footer>
      </div>
    )
  }
}

export default Homepage

import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import profileImg from '../images/headshot.jpg'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import yogiMeImg from '../images/yogiMeImg.png'

class Homepage extends Component {
  render() {
    const formSchema = {
      title: 'Contact Me',
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
        <header>Garrett Anderson</header>
        <aside>
          <figure>
            <img src={profileImg} alt="profile-image" />
            <figcaption>Garrett Lee Graham Anderson</figcaption>
          </figure>
          <ol>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ol>
        </aside>
        <main>
          <article>
            <header>About Me</header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </article>
          <section className="projects">
            <ol>
              <li>
                <img src={colorPickerImg} />
              </li>
              <li>
                <img src={bombSnifferImg} />
              </li>
              <li>
                <img src={toTheMoviesImg} />
              </li>
              <li>
                <img src={yogiMeImg} />
              </li>
            </ol>
          </section>
          <section className="contact-form">
            <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="edit-contact-form" />
          </section>
        </main>
        <footer>Made with 💛by Garrett Lee Graham Anderson</footer>
      </div>
    )
  }
}

export default Homepage

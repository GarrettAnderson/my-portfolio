import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import profileImg from '../images/headshot.jpg'
import colorPickerImg from '../images/colorPickerImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import yogiMeImg from '../images/yogiMeImg.png'

const projectImages = [
  { id: 1, source: colorPickerImg },
  { id: 2, source: bombSnifferImg },
  { id: 3, source: toTheMoviesImg },
  { id: 4, source: yogiMeImg }
]

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
            <p>I'm Florida boy with a global mind-set and a passion for building beautiful things.</p>
          </article>
          <section className="projects">
            <ol>
              {projectImages.map((image) => {
                return (
                  <li>
                    <img src={image.source} />
                  </li>
                )
              })}
            </ol>
          </section>
          <section className="contact-form">
            <form
              method="POST"
              action="https://formspree.io/https://formspree.io/garrettleegrahamanderson@gmail.com.tld"
            >
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Message" />
              <button type="submit" />
            </form>
            {/* <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="edit-contact-form" /> */}
          </section>
        </main>
        <footer>Made with 💛by Garrett Lee Graham Anderson</footer>
      </div>
    )
  }
}

export default Homepage

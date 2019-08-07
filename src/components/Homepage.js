import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../images/cropHeadShot.png'
import data from '../data/projects.json'

class Homepage extends Component {
  state = {
    projects: [],
    navShown: true
  }

  componentDidMount() {
    console.log(data)
    this.setState({ projects: data })
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <button className="navbar-dropdown" onClick={() => this.setState({ navShown: !this.state.navShown })}>
            {this.state.navShown ? <i class="fas fa-bars" /> : <i class="fas fa-times" />}
          </button>
          <nav className={`nav-dropdown ${this.state.navShown ? 'is-shown' : ''} `}>
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
          <section className="profile-img-container">
            <img src={profileImg} alt="headshot" className="profile-image" />
          </section>
        </header>

        <main>
          <article id="about-me">
            <h3>About</h3>
            <p>A Florida native with a global mindset and a passion for building beautiful things.</p>
          </article>
          <section className="projects" id="favorite-projects">
            <h3>Projects</h3>
            <ol>
              {this.state.projects.map((image) => {
                console.log(image)
                return (
                  <li key={image.id}>
                    <Link to={`/${image.id}`}>
                      <img alt="project" src={image.source} id={image.id} />
                      <h4>{image.name}</h4>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </section>

          <section className="contact-form" id="contact-me">
            <h3>Contact</h3>
            <form
              id="fs-frm"
              accept-charset="utf-8"
              action="https://formspree.io/garrettleegrahamanderson@gmail.tld"
              method="POST"
            >
              <fieldset id="fs-form-inputs">
                <label for="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                <label for="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                <label for="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                  required=""
                />
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              </fieldset>
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

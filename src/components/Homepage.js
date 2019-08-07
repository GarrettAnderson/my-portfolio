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
            {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
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
          <article id="about-me" className="about-me-section">
            <h3>About</h3>
            <p>
              A Florida native with a global mindset and a passion for building beautiful things. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
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

          <section className="contact-form-container" id="contact-me">
            <h3>Contact</h3>
            <form
              className="contact-form"
              id="fs-frm"
              acceptCharset="utf-8"
              action="https://formspree.io/garrettleegrahamanderson@gmail.tld"
              method="POST"
            >
              <fieldset id="fs-form-inputs">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                <label htmlFor="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                <label htmlFor="message">Message</label>
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

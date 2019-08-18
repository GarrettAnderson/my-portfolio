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
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#favorite-projects">Projects</a>
              </li>
              <li>
                <a href="#contact-me">Contact</a>
              </li>
            </ol>
          </nav>
          <section className="profile-img-container">
            <section className="profileImg-with-text">
              <img src={profileImg} alt="headshot" className="profile-image" />
              <h3>Garrett Lee Graham Anderson</h3>
            </section>
          </section>
        </header>

        <main>
          <article id="about-me" className="about-me-section">
            <h3>About</h3>
            <p>
              A Florida native with a global mindset and a passion for building beautiful things. My greatest wish is to
              bring people together as a tribe in platonic love. There’s a oneness with the essence of creation that we
              all share. I incorporate these sentiments in my approach to software development, focusing on how to best
              represent my work and the work I accomplish for clients and employers alike.
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

          <section className="contact-form-section" id="contact-me">
            <h3>Contact</h3>
            <form
              className="contact-form"
              id="fs-frm"
              acceptCharset="utf-8"
              action="https://formspree.io/garrettleegrahamanderson@gmail.tld"
              method="POST"
            >
              <fieldset id="fs-form-inputs">
                <ol class="contact-list-container">
                  <li>
                    <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                  </li>
                  <li>
                    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                  </li>
                  <li>
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                      required=""
                    />
                  </li>
                  <li>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                  </li>
                  <li>
                    <input type="submit" value="send" className="send-btn" />
                  </li>
                </ol>
              </fieldset>
            </form>
          </section>
        </main>
        <footer>
          <ul>
            <li>Made with 💛</li>
            <li>Garrett Lee Graham Anderson</li>
          </ul>
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

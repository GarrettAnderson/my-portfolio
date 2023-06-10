import React from "react";
import "../styles/HeaderNav.css";

export default function HeaderNav({
  work,
  about,
  home,
  contact,
  resume,
  executeScroll,
  currentPage,
  handlePageChange,
}) {
  console.log(about);
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div
            onClick={() => executeScroll(home)}
            className="navbar-brand nav-name"
          >
            Garrett Anderson
          </div>
          <button
            className="navbar-toggler navbar-dark hamburger-nav"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-links">
              {/* <div
                onClick={() => executeScroll(about)}
                className={about === "About" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                About Me
              </div> */}
              <div
                onClick={() => executeScroll(work)}
                className={work === "MyWork" ? "nav-link active" : "nav-link"}
              >
                My Work
              </div>
              <div
                onClick={() => executeScroll(contact)}
                className={
                  currentPage === "ContactMe" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </div>
              <div
                onClick={() => executeScroll(resume)}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Skills
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

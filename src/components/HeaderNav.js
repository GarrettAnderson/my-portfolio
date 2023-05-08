import React from "react";
import "../styles/HeaderNav.css";

export default function HeaderNav({
  props,
  executeScroll,
  currentPage,
  handlePageChange,
}) {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            onClick={() => handlePageChange("About")}
            className="navbar-brand nav-name"
            href="/"
          >
            Garrett Anderson
          </a>
          <button
            className="navbar-toggler"
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
              <a
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="about"
              >
                About Me
              </a>
              <a
                onClick={() => handlePageChange("MyWork")}
                className={
                  currentPage === "MyWork" ? "nav-link active" : "nav-link"
                }
                href="work"
              >
                My Work
              </a>
              <a
                onClick={() => handlePageChange("ContactMe")}
                className={
                  currentPage === "ContactMe" ? "nav-link active" : "nav-link"
                }
                href="contact"
              >
                Contact Me
              </a>
              <a
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                href="resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

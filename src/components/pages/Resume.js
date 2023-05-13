import React from "react";
import ResumeFile from "../../assets/files/GarrettAndersonResume2023.pdf";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Resume(props) {
  return (
    <section
      id="resume-section"
      className="resume-container container"
      ref={props.resume}
    >
      <div className="row">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <a href={ResumeFile} target="_blank">
            <button type="button" class="btn btn-outline-info">
              Dowload
            </button>
          </a>
        </div>
        <div className="col-sm-12 col-md-6 skills">
          <h1>Skills</h1>
          <ul className="list-group list-group-flush">
            {/* <FontAwesomeIcon icon={icon({ name: "user-secret" })} /> */}
            <li></li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon icon={faCss3Alt} />
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon icon={faJs} />
            </li>
            {/* <li class="list-group-item">jQuery</li> */}
            <li class="list-group-item">
              <FontAwesomeIcon icon={faReact} />
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon icon={faBootstrap} />
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon icon={faNodeJs} />
            </li>
            {/* <li class="list-group-item">JSON</li> */}
            {/* <li class="list-group-item">SQL</li>
            <li class="list-group-item">Express.js</li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

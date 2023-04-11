import React from "react";
import ResumeFile from "../../assets/files/GarrettAndersonResume2023.pdf";

export default function Resume() {
  return (
    <section className="resume-container container">
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
          <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML5</li>
            <li class="list-group-item">CSS3</li>
            <li class="list-group-item">JavaScript</li>
            <li class="list-group-item">jQuery</li>
            <li class="list-group-item">ReactJS</li>
            <li class="list-group-item">bootstrap</li>
            <li class="list-group-item">Node.js</li>
            <li class="list-group-item">JSON</li>
            <li class="list-group-item">SQL</li>
            <li class="list-group-item">Express.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

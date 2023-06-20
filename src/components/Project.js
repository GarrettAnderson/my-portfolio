import React from "react";

export default function Project(props) {
  return (
    <li className="project-item">
      <div>
        <figure className="card">
          <a href={props.liveUrl} target="_blank">
            <img
              className="card-img-top"
              src={require(`../assets/images/${props.image}`)}
              alt={props.name}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <ol class="project-link-btn">
              <li>
                <a href={props.githubUrl}>
                  <button>Github</button>
                </a>
              </li>
              <li>
                <a href={props.liveUrl}>
                  <button>Live Site</button>
                </a>
              </li>
            </ol>
          </div>
        </figure>
      </div>
    </li>
  );
}

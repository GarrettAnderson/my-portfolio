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
          </div>
        </figure>
      </div>
    </li>
  );
}

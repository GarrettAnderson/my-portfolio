import React from "react";
import Project from "../Project";
import "../../styles/Project.css";
import bombSnifferImg from "../../assets/images/bombSnifferImg.png";

export default function MyWork() {
  const projects = [
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
    {
      name: "Bomb Sniffer",
      image: "bombSnifferImg.png",
      desc: "This is a project using an API to simulate the game minesweeper.",
      liveUrl: "https://bomb-sniffer-garrettanderson.netlify.com",
      githubUrl: "https://github.com/GarrettAnderson/bomb-sniffer",
      hasGit: true,
    },
  ];

  return (
    // create a map function to iterate over the projects and render the project component
    <ol className="project-list row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {projects.map((project, i) => {
        console.log(project);
        return (
          <Project
            key={i}
            image={project.image}
            name={project.name}
            desc={project.desc}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            hasGit={project.hasGit}
          />
        );
      })}
    </ol>
  );
}

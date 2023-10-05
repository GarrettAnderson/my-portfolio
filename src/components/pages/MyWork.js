import React from "react";
import Project from "../Project";
import "../../styles/Project.css";
import bombSnifferImg from "../../assets/images/bombSnifferImg.png";

export default function MyWork(props) {
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
      name: "Bootleg Spotify",
      image: "bootlegspotify.png",
      desc: "This is a front-end project using an two APIs to retrieve artist albums and playlist.",
      liveUrl: "https://garrettanderson.github.io/Bootleg-Spotify/",
      githubUrl: "https://github.com/GarrettAnderson/Bootleg-Spotify",
      hasGit: true,
    },
    // {
    //   name: "Gamer's Gauntlet",
    //   image: "gamersgauntlet.png",
    //   desc: "This is a full-stack project that quizes the user on various questions.",
    //   liveUrl: "https://powerful-inlet-74359.herokuapp.com/",
    //   githubUrl: "https://github.com/GarrettAnderson/gamers-gauntlet",
    //   hasGit: true,
    // },
    {
      name: "Weather App",
      image: "weather-app-screenshot.png",
      desc: "This is a front-end project using an API to pull weather forecast data.",
      liveUrl: "https://garrettanderson.github.io/weather-app/",
      githubUrl: "https://github.com/GarrettAnderson/weather-app",
      hasGit: true,
    },
    // {
    //   name: "Tech Blog",
    //   image: "tech-blog-screenshot.png",
    //   desc: "This is a full stack project that allows a user to create, read, update and delete a blog post.",
    //   liveUrl: "https://salty-reaches-84386.herokuapp.com/",
    //   githubUrl: "https://github.com/GarrettAnderson/tech-blog",
    //   hasGit: true,
    // },
    // {
    // name: "React Gamer's Gauntlet",
    // image: "gamersgauntletreact.png",
    // desc: "This is a project is a Reactified Gamer's Gauntlet while using Mongodb and GraphQL.",
    // liveUrl: "https://calm-anchorage-14292.herokuapp.com/",
    // githubUrl: "https://github.com/GarrettAnderson/react-gamers-gauntlet",
    // hasGit: true,
    // },
  ];

  return (
    // create a map function to iterate over the projects and render the project component
    <ol
      id="work-details"
      // ref={props.work}
      className="project-list row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
    >
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

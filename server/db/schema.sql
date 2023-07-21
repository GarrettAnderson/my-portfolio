DROP DATABASE IF EXISTS portfolio_projects;
CREATE DATABASE portfolio_projects;

USE portfolio_projects;

CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    img VARCHAR(255) NOT NULL,
    details VARCHAR(255) NOT NULL,
    liveUrl VARCHAR(255) NOT NULL,
    githubUrl  VARCHAR(255) NOT NULL
);
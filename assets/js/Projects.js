// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>This is a short description of project 1.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>This is a short description of project 2.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;

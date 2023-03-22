import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name">Your Name</h1>
        <p className="tagline">Programmer</p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">Write a brief introduction about yourself and your programming experience here.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li className="skill">Skill 1</li>
            <li className="skill">Skill 2</li>
            <li className="skill">Skill 3</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            <li className="project">
              <h3 className="project-title">Project 1</h3>
              <p className="project-text">Write a brief description of project 1 here.</p>
            </li>
            <li className="project">
              <h3 className="project-title">Project 2</h3>
              <p className="project-text">Write a brief description of project 2 here.</p>
            </li>
            <li className="project">
              <h3 className="project-title">Project 3</h3>
              <p className="project-text">Write a brief description of project 3 here.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright © {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;


import { useState } from "react";
import "./AboutMeBox.css";

function AboutMeBox() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="container">
      <h1>About Me</h1>
      <img src="my-photo.jpg" alt="My Photo" />
      {visible && (
        <div className="text">
          <p>
            Hello, my name is John Doe and I'm a web developer based in New York
            City. I specialize in building responsive and user-friendly websites
            using the latest web technologies.
          </p>
          <button>Download Resume</button>
        </div>
      )}
      <button onClick={toggleVisibility}>
        {visible ? "Hide" : "Show More"}
      </button>
    </div>
  );
}

/*<div className="container">
      <header className="header">
        <h1 className="name">Jack Mahoney</h1>
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

      </main>

      <footer className="footer">
        <p className="footer-text">Copyright © {new Date().getFullYear()} Your Name</p>
      </footer>
    
    </div>*/

export default AboutMeBox;

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
            Hello, my name is Jack Mahoney and I'm a web developer based in Chicago.
            I specialize in building responsive and user-friendly websites
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

export default AboutMeBox;

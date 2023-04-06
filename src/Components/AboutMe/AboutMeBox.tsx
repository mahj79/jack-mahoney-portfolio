import { useState } from "react";
import { JobsCard } from "./JobsCard";

export const AboutMeBox: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }


  return (
        <div className='AboutMeContainer'>
          <div className='AboutMeBox'>
            <h1>About Me</h1>
            <img className="AboutMeImage" src="HawaiiVolcano.jpg" alt="Me in Hawaii!" />
            {visible && (
              <div className="AboutMeBoxText">
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

          <div className="JobsGrid">
            <JobsCard className="NorthernTrustContainer" title="Northern Trust" logo="ntlogo.png" jobInfo="My current Job"></JobsCard>
            <JobsCard className="OptivContainer" title="Optiv" logo="optivlogo.png" jobInfo="My old Job"></JobsCard>
            <JobsCard className="OptivContainer" title="Deloitte" logo="deloittelogo.png" jobInfo="My first Job"></JobsCard>
          </div>

          </div>

        
  );
};

export default AboutMeBox;

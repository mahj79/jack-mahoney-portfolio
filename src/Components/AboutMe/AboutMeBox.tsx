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
            <h1>About Me (Work in Progress)</h1>
            <img className="AboutMeImage" src="HawaiiVolcano.jpg" alt="Me in Hawaii!" />
            {visible && (
              <div className="AboutMeBoxText">
                <p>
                  Hello, my name is Jack Mahoney and I'm a developer based in Chicago.
                  Since graduating college in 2018 with a degree in electrical engineering, I've spent my career
                  working in the cybersecurity field! You can see the companies I've had the pleasure of working at up
                  to this point below, give them a click to find out more about each role. 
                  <br />
                  <br />
                  While my focus has been in the cybersecurity space, my real passion is solving complex problems
                  with tech, hence why I built this website! When I'm not working, you can usually find me trying to improve
                  my programming skills or spending time with my friends, girlfriend, or Cleo my french bulldog.
                  If you're interested in learning more about me, hop over to the next page to read about my programming journey.                   
                  
                </p>
                <button>
                  <a href="Jack Mahoney Resume April 2023.pdf" download>Download Resume</a>
                </button>
              </div>
            )}
            <button onClick={toggleVisibility}>
              {visible ? "Hide" : "Learn About Me!"}
            </button>
          </div>

          <div className="JobsGrid">
            <JobsCard className="NorthernTrustContainer" title="Northern Trust" logo="ntlogo.png"
             jobTitle="Cybersecurity Risk Lead" jobInfo="hello"></JobsCard>

            <JobsCard className="OptivContainer" title="Optiv" logo="optivlogo.png" 
            jobTitle="Cybersecurity Senior Consultant" jobInfo="hello"></JobsCard>
            
            <JobsCard className="OptivContainer" title="Deloitte" logo="deloittelogo.png" 
            jobTitle="Cyber Risk Senior Consultant" jobInfo="hello"></JobsCard>
          </div>

          </div>

        
  );
};

export default AboutMeBox;

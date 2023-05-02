import { useState } from "react";
import { JobsCard } from "./JobsCard";

export const AboutMeBox: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  const downloadResume = () => {
   
    fetch('Jack Mahoney Resume April 2023.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let link = document.createElement('a');
        link.href = fileURL;
        link.download = 'Jack Mahoney Resume April 2023.pdf';
        link.click();
      })
    })
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
                <button className="AboutMeButton" onClick={downloadResume}>
                  <p>Download Resume</p>
                </button>
              </div>
            )}
            <button className="AboutMeButton" onClick={toggleVisibility}>
              {visible ? "Hide" : "Learn About Me!"}
            </button>
          </div>

          <div className="JobsGrid">
            <JobsCard className="NorthernTrustContainer" title="Northern Trust" logo="ntlogo.png"
             jobTitle="Cybersecurity Risk Lead" jobInfo="Responsible for supporting risk mitigation across all infrastructure related technology groups. Analyzed and secured high priority 
             areas for potential cyber risk, as well as perform advisory oversight to infrastructure operations leading risk mitigation activities."></JobsCard>

            <JobsCard className="OptivContainer" title="Optiv" logo="optivlogo.png" 
            jobTitle="Cybersecurity Senior Consultant" jobInfo="Improved client's cybersecurity maturity by levarging NIST and ISO 27001 standards, 
            reducing unnecessary spending, understaning top cyber threats to the network, and securing the Software and Development Lifecycle (SDLC)."></JobsCard>
            
            <JobsCard className="OptivContainer" title="Deloitte" logo="deloittelogo.png" 
            jobTitle="Cyber Risk Senior Consultant" jobInfo="Served multiple clients, across various industries in mitigating cybersecurity related risks. 
            Responsible for assessing data feeds, endpoint detection with security coverage, and implementation for ServiceNow supporting modules."></JobsCard>
          </div>

          </div>

        
  );
};

export default AboutMeBox;

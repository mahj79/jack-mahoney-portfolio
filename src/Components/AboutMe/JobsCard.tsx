import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export interface JobsCardsProps {
    title: string;
    logo: string;
    jobTitle: string;
    className: string;
    jobInfo: string;
}

export const JobsCard: React.FC<JobsCardsProps> = (props) => {
    const {title, logo, jobTitle: jobTitle, className, jobInfo: jobInfo} = props;
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
    <ReactCardFlip isFlipped={isFlipped} containerClassName="jobsContainer">
        <div onClick={() => setIsFlipped(!isFlipped)} className={className}>
              <h2>{title}</h2>
              <img className="jobsLogo" src={logo} alt={title}/>
        </div>

        <div onClick={() => setIsFlipped(!isFlipped)} className={className}>
            <h3>{jobTitle}</h3>
            <p>{jobInfo}</p>
        </div>
    </ReactCardFlip>
    )
}
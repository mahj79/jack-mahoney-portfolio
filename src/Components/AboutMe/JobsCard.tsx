import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export interface JobsCardsProps {
    title: string;
    logo: string;
    jobInfo: string;
    className: string;
}

export const JobsCard: React.FC<JobsCardsProps> = (props) => {
    const {title, logo, jobInfo, className} = props;
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
    <ReactCardFlip isFlipped={isFlipped} containerClassName="northernTrustContainer">
        <div onClick={() => setIsFlipped(!isFlipped)} className={className}>
              <h1>{title}</h1>
              <img className="northernTrustLogo" src={logo} alt={title}/>
        </div>

        <div onClick={() => setIsFlipped(!isFlipped)} className={className}>
            <h1>{jobInfo}</h1>
        </div>
    </ReactCardFlip>
    )
}
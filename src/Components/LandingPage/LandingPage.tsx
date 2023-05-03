import { CarouselRef } from 'antd/es/carousel';
import React from 'react';

export interface LandingPageProps {
    slider: CarouselRef | null;
}

export const LandingPage: React.FC<LandingPageProps> = (props) => {

const {slider} = props;

return (
    <div>
        <header className="header">
            <h4 onClick={() => slider?.goTo(1)}>About Me</h4>            
            <h4 onClick={() => slider?.goTo(2)}>Programming </h4>
            <h4 onClick={() => slider?.goTo(3)}>Fun Facts!</h4>
        </header>
        
        <div className="landingPageContainer">
            <div className="landingPageBox">
                <h1>Hello!</h1>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
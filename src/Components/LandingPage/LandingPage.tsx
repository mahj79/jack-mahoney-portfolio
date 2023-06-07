import { CarouselRef } from 'antd/es/carousel';
import React from 'react';
import Typewriter from 'typewriter-effect';

export interface LandingPageProps {
    slider: React.RefObject<CarouselRef>;
}

export const LandingPage: React.FC<LandingPageProps> = (props) => {

const {slider} = props;

return (
    <div>
        <header className="header">
            <h4 onClick={() => slider.current?.goTo(1)}>About Me</h4>            
            <h4 onClick={() => slider.current?.goTo(2)}>Programming </h4>
            <h4 onClick={() => slider.current?.goTo(3)}>Fun Facts!</h4>
        </header>
        
        <div className="landingPageContainer">
            <div className="landingPageBox">
                <h1>
                    {<Typewriter options={{loop: true}} onInit={(typewriter) => {
                    typewriter.typeString('Hello!').callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {})
                    typewriter.typeString(`Welcome to Jack Mahoney's Website!`).callFunction(() => {})
                    .pauseFor(2500)
                    .start();
                    }}/>}
                </h1>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
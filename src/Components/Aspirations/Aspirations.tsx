import { CarouselRef } from 'antd/es/carousel';
import React from 'react';

export interface LandingPageProps {
  slider: React.RefObject<CarouselRef>;
}

export const Aspirations: React.FC<LandingPageProps> = (props) => {

  const {slider} = props;

    return (

      <div>

          <header className='header'>
            <h4 onClick={() => slider.current?.goTo(0)}>Home Page</h4>
            <h4 onClick={() => slider.current?.goTo(1)}>About Me</h4>            
            <h4 onClick={() => slider.current?.goTo(2)}>Programming </h4>
            <h4 onClick={() => slider.current?.goTo(3)}>Fun Facts!</h4>
          </header>


        <div className="AspirationsContainer">
          <div className="AspirationsBox">
            <img className="AspirationsImage" src="Banff Headshot (2).jpg" alt="Me in Banff"/>
            <h2>Why I Code!</h2>
            <p>The first time I got in to programming was during my second year of college
              where I was required to take a computer science class to learn C. If you are familiar
              with C, then you may understand why I wanted nothing to do with programming
              after completing the course and didn't get back into development work until the winter
              of 2021. 
              <br />
              <br />
              When I decided to get back into programming I wasn't sure where to start. I did my 
              research on where and what to learn and ended up getting a subscription to CodeAcademy
              to learn the most modern front end engineering techniques. 
              Since then I've had the chance to build some cool projects such as a 
              web app that uses a Spotify API to build custom playlists and a web app 
              that will help you figure out what movie to watch! Right now my goal is to continue
              improving my skills, but also begin solving problems that most users struggle with
              from a user interface and user experience perspective. Check out below to see some 
              of the skills I have experience with!
              <br />
              <br />
              <ul>
                <li>JavaScript</li>
                <li>TypeScript (What this website is mostly built on!)</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>C</li>
                <li>Redux</li>
              </ul>
            </p>
          </div>
        </div>
        </div>
      );
    }
export default Aspirations;
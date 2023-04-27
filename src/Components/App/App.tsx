import React from 'react';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel from 'antd/es/carousel';
import Aspirations from '../Aspirations/Aspirations';
import FunFacts from '../FunFacts/FunFacts';
import LandingPage from '../LandingPage/LandingPage';

const App: React.FC = () => (
  
  <div className="body" style={{overflow: 'hidden'}}>
    <Carousel>
      <LandingPage/>
      <AboutMeBox/>
      <Aspirations/>
      <FunFacts/>
    </Carousel>
  </div>
);

export default App;


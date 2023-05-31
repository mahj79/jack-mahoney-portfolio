import React, { useRef, useState } from 'react';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel, { CarouselRef } from 'antd/es/carousel';
import Aspirations from '../Aspirations/Aspirations';
import FunFacts from '../FunFacts/FunFacts';
import LandingPage from '../LandingPage/LandingPage';

const App: React.FC = () =>  {
  
const slider = useRef<CarouselRef>(null)
  
return(  
  <div className="body" style={{overflow: 'hidden'}}>
    <Carousel ref={slider} draggable accessibility>
      <LandingPage slider={slider}/>
      <AboutMeBox/>
      <Aspirations/>
      <FunFacts slider={slider}/>
    </Carousel>
  </div>
);
}
export default App;


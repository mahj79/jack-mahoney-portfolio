import React, { useRef, useState } from 'react';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel, { CarouselRef } from 'antd/es/carousel';
import Aspirations from '../Aspirations/Aspirations';
import FunFacts from '../FunFacts/FunFacts';
import LandingPage from '../LandingPage/LandingPage';


const App: React.FC = () =>  {
  
const slider = useRef<CarouselRef | null>()

  
return(  
  <div className="body" style={{overflow: 'hidden'}}>
    <Carousel ref={slide => slider.current=slide}>
      {slider.current && <LandingPage slider={slider.current}/>}
      <AboutMeBox/>
      <Aspirations/>
      <FunFacts/>
    </Carousel>
  </div>
);
}
export default App;


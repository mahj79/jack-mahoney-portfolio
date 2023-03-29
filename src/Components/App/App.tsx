import React from 'react';
import './App.css';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel from 'antd/es/carousel';
import { Aspirations } from '../Aspirations/Aspirations';

const contentStyle: React.CSSProperties = {
  height: '100vh',
  color: '#3e8e41',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <div style={{overflow: 'hidden'}}>
  <Carousel style={{height: '100vh'}}>
    <AboutMeBox/>
    <div>
      <Aspirations />
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
  </Carousel>
  </div>
);

export default App;


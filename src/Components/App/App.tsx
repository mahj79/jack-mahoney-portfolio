import React from 'react';
import './App.css';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel from 'antd/es/carousel';

const contentStyle: React.CSSProperties = {
  height: '100vh',
  color: '#3e8e41',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <Carousel >
    <div>
      <AboutMeBox/>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;


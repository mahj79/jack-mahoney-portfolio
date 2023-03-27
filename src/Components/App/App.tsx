import React from 'react';
import './App.css';
import AboutMeBox from '../AboutMe/AboutMeBox';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className='AboutMeBox'>
        <AboutMeBox />
      </div>

      
    );
  }
}

export default App;


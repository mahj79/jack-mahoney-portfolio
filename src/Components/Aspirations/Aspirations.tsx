import React from 'react';

export const Aspirations: React.FC = () => {
    return (
        <div className="AspirationsContainer">
          <div className="AspirationsBox">
            <img src={'HawaiiVolcano.jpg'} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h2>Jack Mahoney</h2>
            <p>I'm trying to become the best programmer I can be!</p>
          </div>
        </div>
      );
    }
export default Aspirations;
import React, { useEffect } from 'react';
import { SpotifyService } from './Spotify/Util/SpotifyService';

export const FunFacts: React.FC = () => {
    useEffect(() => {
        SpotifyService.getAccessToken()
    })
    return (
        <div className="FunFactsContainer">
          <div className="FunFactsBox">
            <img src={'HawaiiVolcano.jpg'} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h2>Jack Mahoney</h2>
            <p>I'm trying to become the best programmer I can be!</p>
          </div>
        </div>
      );
    }
export default FunFacts;
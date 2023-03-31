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
            <p>Here are some fun facts about me! 
                Check out my Spotify API to see some music I'm into!</p>
          </div>
        </div>
      );
    }
export default FunFacts;
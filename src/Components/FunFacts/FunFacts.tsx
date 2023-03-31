import React, { useEffect } from 'react';
import { SpotifyService } from './Spotify/Util/SpotifyService';

export const FunFacts: React.FC = () => {
    useEffect(() => {
        SpotifyService.getAccessToken()
    })
    return (
        <div className="FunFactsContainer">
          <div className="FunFactsBox">
            <img className="FunFactsImage" src={'HawaiiVolcano.jpg'} alt="Profile" />
            <h2>Jack Mahoney</h2>
            <p>Here are some fun facts about me! 
                Check out my Spotify API to see some music I'm into!</p>
          </div>
        </div>
      );
    }
export default FunFacts;
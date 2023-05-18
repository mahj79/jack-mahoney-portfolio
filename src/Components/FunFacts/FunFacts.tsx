import React, { useEffect, useState } from 'react';
import { SpotifyService } from './Spotify/Util/SpotifyService';
import { IPlaylist } from './Spotify/Data/IPlaylist';

export const FunFacts: React.FC = () => {
  const [playlist, setPlaylist] = useState<IPlaylist | undefined>(undefined);  
  
  useEffect(() => {
    if (playlist) return;  
      const fetchData = async () => {
        setPlaylist(await SpotifyService.getPlaylist());
      }
      fetchData();   
   }, [playlist])

    return (
        <>
        <div className="FunFactsContainer">
          <div className="FunFactsBox">
            <img className="FunFactsImage" src={'HawaiiVolcano.jpg'} alt="Profile" />
            <h2>Jack Mahoney</h2>
            <p>Here are some fun facts about me! 
                Check out my Spotify API to see some music I'm into!</p>
          </div>

          <div className="PlaylistContainer">
            <h2>Spotify Playlist</h2>
            <p>{playlist?.tracks.href}</p>
          </div>
        </div>

        
        </>
      );
    }
export default FunFacts;
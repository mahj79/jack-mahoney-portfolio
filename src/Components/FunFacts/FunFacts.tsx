import React, { useEffect, useState } from 'react';
import { SpotifyService } from './Spotify/Util/SpotifyService';
import { IPlaylist } from './Spotify/Data/IPlaylist';
import slider from 'antd/es/slider';
import { CarouselRef } from 'antd/es/carousel';

export interface LandingPageProps {
  slider: React.RefObject<CarouselRef>;
}

export const FunFacts: React.FC<LandingPageProps> = (props) => {
  const [playlist, setPlaylist] = useState<IPlaylist | undefined>(undefined);  
  
  const {slider} = props;

  useEffect(() => {
    if (playlist) return;  
      const fetchData = async () => {
        const jacksJams = await SpotifyService.getJacksJams()
        console.log(jacksJams);
        setPlaylist(jacksJams);
      }
      fetchData();   
   }, [playlist])

    return (
        <div>

          <header className='header'>
            <h4 onClick={() => slider.current?.goTo(0)}>Home Page</h4>
            <h4 onClick={() => slider.current?.goTo(1)}>About Me</h4>            
            <h4 onClick={() => slider.current?.goTo(2)}>Programming </h4>
            <h4 onClick={() => slider.current?.goTo(3)}>Fun Facts!</h4>
          </header>
          
          <div className="FunFactsContainer">
            <div className="FunFactsBox">
              <img className="FunFactsImage" src={'HawaiiVolcano.jpg'} alt="Profile" />
              <h2>Jack Mahoney</h2>
              <p>Here are some fun facts about me! 
                  Check out my Spotify API to see some music I'm into!</p>
            </div>

            <div className="PlaylistContainer">
              <h2>Spotify Playlist</h2>
              {playlist?.items.map(item => {
                return <a href={item.track.album.images[0].url}>{item.track.name} by {item.track.artists.map(a => a.name).join(', ')}</a> 
              })}
            </div>
          </div>
        
        </div>
        
      );
    }
export default FunFacts;
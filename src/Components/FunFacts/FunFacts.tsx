import React, { useEffect, useState } from 'react';
import { SpotifyService } from './Spotify/Util/SpotifyService';
import { IPlaylist } from './Spotify/Data/IPlaylist';
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
              <img className="FunFactsImage" src="Cleo Party (2).jpg" alt="Cleo and I at a french bulldog ugly Christmas party" />
              <h2>Fun Facts</h2>
              <p>Here are some fun facts about me! Also check out my Spotify API to see one of my playlists!</p>
              <ul>
                <li>I love color, especially ones that pop like my favorite color purple!</li>
                <br></br>
                <li>I was the first person in my family to graduate from college with a degree.</li>
                <br></br>
                <li>When I was in middle school my Dad, brother, and myself started a Lawn Business that 
                  still operates today.
                </li>
                <br></br>
                <li>I used to play the saxaphone which is why I love jazz music.</li>
                <br></br>
                <li>I've lived in Chicago since the end of 2018, but for the first 8 months I slept on 
                  a couch!
                </li>
                <br></br>
                <li>I'm an avid Detroit sports fan.</li>
                <br></br>
                <li>Procurer of many memes.</li>
                <br></br>
                <li>Every single photo used on this website was taken by one of my friends!</li>
              </ul>
            </div>

            <div className="PlaylistContainer">
              <h2>Jack's Jams</h2>
              {playlist?.items.map(item => {
                return <a href={item.track.album.images[0].url}>{item.track.name} by {item.track.artists.map(a => a.name).join(', ')}</a> 
              })}
            </div>
          </div>
        
        </div>
        
      );
    }
export default FunFacts;
import { IPlaylist } from "../Data/IPlaylist";

const client_id = 'f8ad907eba73435cab1eac252174520e';
const redirect_uri = 'http://localhost:3000/';


export const SpotifyService = {
    getAccessToken: () => {
        const accessToken = localStorage.getItem('SpotifyAccessToken');
        if(accessToken !== '' && accessToken !== null) {
            return accessToken;
        }
        
        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        console.log(expiresInMatch);

        if(accessTokenMatch && expiresInMatch) {
            localStorage.setItem('SpotifyAccessToken', accessTokenMatch[1]);
            const expiresIn = Number(expiresInMatch[1]);
            //Clears parameters and allows a new access token to be grabbed following expiration.
            window.setTimeout(() => localStorage.setItem('SpotifyAccessToken', ''), expiresIn - 1);
            // window.history.pushState('Access Token', null, '/');
            return accessTokenMatch[1];
        }
        else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            window.location.href = accessUrl;
        }
    },

    getPlaylist: async () => {
        const accessToken = SpotifyService.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/users/22lrbuvgjlng2i73ylvffudnq/playlists`, 
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const playlists = await response.json() as {items: IPlaylist[]}
        return playlists.items.find(p => p.name === `Jack's Jams`);
        
    },

    getJacksJams: async () => {
        const accessToken = SpotifyService.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/playlists/5DB4G5PjPedbYhP0WhUxSN/tracks`, 
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const playlist = await response.json() as IPlaylist
        return playlist;
    }
}